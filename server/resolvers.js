import { Room, Player, Card, Status, Answer, Response } from './models';
import { PubSub, withFilter } from 'graphql-subscriptions';
import merge from 'lodash/merge'

const pubsub = new PubSub();
const JOINED_ROOM = 'JOINED_ROOM',
  CREATED_ROOM = 'CREATED_ROOM',
  REMOVED_ROOM = 'REMOVED_ROOM',
  UPDATE_STATUS = 'UPDATE_STATUS',
  SUBMITTED = 'SUBMITTED';

require("babel-polyfill");

const resolvers = { 
  Query: {
    rooms: () => Room.find(),
    findRoom: (_, { code }) => Room.findOne({ code }),
    findCards: (_, { cardType, numCards }) => Card.aggregate().match({ cardType }).sample(numCards),
    retrievePlayerPrompts: async (_, {code, username}) => {
      let room = await Room.findOne({code})
      let {prompts, players, status: { currentRound }} = room;
      let player = players.filter( pl => pl.username===username)[0]
      return prompts.filter( response => response.roundNumber === currentRound && response.players.map(pl=>pl.id).includes(player.id)).map( response=> response.prompt)
    }
  },
  Mutation: {
    createRoom: async (_, { code, numRounds, gameType }) => {
      const status = new Status();
      const room = new Room({ code, numRounds, gameType, status });
      await room.save();
      pubsub.publish(CREATED_ROOM, { createdRoom: room })
      return room;
    },
    removeRoom: async (_, { id }) => {
      await Room.findByIdAndRemove(id);
      pubsub.publish(REMOVED_ROOM, { removedRoom: id })
      return true;
    },
    addPlayer: async (_, { code, username }) => {
      let usernameTaken = await Room.findOne({code, "players.username": username}).exec();
      if (usernameTaken) {
        usernameTaken = "Username taken"
      } else {
        var player = new Player({ username, score: 0 });
        await Room.update(
          { code }, 
          {$push: { players: player }}
        );
      }
      const room = Room.findOne({ code });
      pubsub.publish(`${JOINED_ROOM}.${code}`, { joinedRoom: room, usernameTaken })
      return player;
    },
    addPlayerHand: async (_, {code, username, numCards, cardType}) => {
      const cards = await Card.aggregate().match({ cardType }).sample(numCards).exec()
      return await Room.findOneAndUpdate(
        {code, "players.username": username},
        {$push: {"players.$.hand": cards}})
    },
    updateStatus: (_, { code, options }) => updateStatus(code, options),
    retrieveAndAssignPrompts: async (_, { code, cardType }) => {
      const room = await Room.findOne({code});
      const { players, discard, numRounds, status} = room._doc;
      const {currentRound} = status;
      const numCards = numRounds !== status.currentRound ? room.players.length : 1
      const ids = discard.map( card => card.id);

      const prompts = await Card.aggregate().match({ cardType, id: {$nin: ids } }).sample(numCards).exec()
      let promptObjects = getPromptsObject(players, numCards, prompts, currentRound);

      await Room.findOneAndUpdate({code}, {$push: { discard: prompts, prompts: promptObjects}})

      return prompts;
    },
    addAnswerToResponse: async (_, {responseId, code, username, answers}) => {
      let room = await Room.findOne({code})
      let {prompts, players, status} = room;
      let response = prompts.filter( response => response.id === responseId)[0]
      let player = players.filter( pl => pl.username===username)[0]
      let {currentRound} = status;

      if(response.answers.map( a => a.player.id).includes(player.id)) return response;
      let playerAnswer = new Answer({player, answers })
      response.answers.push(playerAnswer)
      await Room.findOneAndUpdate({code, "prompts._id": responseId}, {$push: { "prompts.$.answers": playerAnswer}})

      // send sub if all players ansered
      const isLastRound = (status.currentRound === room.numRounds)
      const promptsForRound = prompts.filter(res => res.roundNumber === currentRound)
      if (allPlayersAnswered(promptsForRound, players, isLastRound)) {
        pubsub.publish(`${player.username}.${SUBMITTED}.${code}`, { playerSubmitted: player })
        updateStatus(code, {allAnswered: true})
      } 
      if (playerAnsweredAllPrompts(promptsForRound, player) || isLastRound) {
        pubsub.publish(`${player.username}.${SUBMITTED}.${code}`, { playerSubmitted: player })
      } 

      return response;
    },
    addVoteToAnswer: async (_, { code, username, answerId, responseId}) => {
      let room = await Room.findOne({code})
      let {prompts, players, status} = room;
      let player = players.filter( pl => pl.username===username)[0]
      let prompt = prompts.filter( p => p.id === responseId)[0];
      let answer = prompt.answers.filter( a => a.id === answerId)[0]
      let {roundNumber} = status;

      answer.votes.push(player)

      await Room.findOneAndUpdate({ code, "prompts._id": responseId},
      { $set: { "prompts.$.answers": answer}}
      )

      // send sub for finishing voting if voting over
      const isLastRound = (status.currentRound === room.numRounds)
      const promptsForRound = prompts.filter(res => res.roundNumber === roundNumber)
      if (allVotesCast(prompts, isLastRound, players)) {
        // fire subscription for allVotesCast
        updateStatus(code, {allVoted: true})
      }

      return answer
    },
    addPlayerScore: async(_, {code, username, points}) => {
      return await Room.findOneAndUpdate({ code, "players.username": username},
       { $inc: { "players.$.score": points }});
    }
  },
  Subscription: {
    joinedRoom: {
      subscribe: (_, { code }) => pubsub.asyncIterator(`${JOINED_ROOM}.${code}`)
    },
    createdRoom: {
      subscribe: () => pubsub.asyncIterator(CREATED_ROOM)
    },
    removedRoom: {
      subscribe: () => pubsub.asyncIterator(REMOVED_ROOM)
    },
    updateStatus: {
      subscribe: (_, { code }) => pubsub.asyncIterator(`${UPDATE_STATUS}.${code}`)
    },
    playerSubmitted: {
      subscribe: (_, {username, code}) => pubsub.asyncIterator(`${username}.${SUBMITTED}.${code}`)
    }
  }
}

export default resolvers;

const updateStatus = async (code, options) => {
  let room = await Room.findOne({code})
  let {status} = room._doc;
  status = merge({},status._doc, options)
  await Room.findOneAndUpdate({code}, { $set: { status } })
  room = await Room.findOne({code})
  status = room.status
  pubsub.publish(`${UPDATE_STATUS}.${code}`, { updateStatus: status})
  return room;
}

const getPromptsObject = (rcvdPlayers, numCards, prompts, roundNumber) => {
  let promptObjects;
  let playerMatchups = buildMatchups(rcvdPlayers);

  if (numCards === 1) {
    promptObjects = [new Response({ prompt: prompts[0], players: rcvdPlayers, roundNumber })]
  } else {
    promptObjects = prompts.map( prompt => {
      const players = playerMatchups.pop()
      return new Response({ prompt, players, roundNumber })
    })
  }
  return promptObjects;
}

const buildMatchups = players => {
  if (players.length === 3) {
    return [[players[0], players[1]], [players[1],players[2]], [players[2], players[0]]]
  }
  const matchups = []
  const offset = (Math.floor(Math.random() * players.length-1) + 1 )
  players.forEach(pl => matchups.push([pl]))
  matchups.forEach( (plArr,i) => {
    let pOffset = (i+offset) % players.length;
    if (pOffset === 0 || pOffset === players.length) {
      pOffset  += 1
    }
    plArr.push(players[pOffset])
  })
  return matchups;
}

const allPlayersAnswered = (prompts, players, isLastRound) => {
  for (let i = 0; i < prompts.length; i++) {
    if (prompts[i].answers.length < 2) {
      return false
    }
  }
  if (!isLastRound) {
    return true;
  } else {
    if (prompts[0].answers.length === players.length) {
      return true
    } else {
      return false
    }
  }

}

const playerAnsweredAllPrompts = (prompts, player) => {
   let answers = prompts.filter( response => response.players.map(pl=>pl.id).includes(player.id)).map( response => response.answers)
   answers = [].concat.apply([], answers)
    answers = answers.filter( ans => ans.player.id === player.id)
   return (answers.length === 2);
}

const allVotesCast = (prompts, isLastRound, players) => {
  let answers = []
  let totalVoteCount = 0
  prompts.forEach( prompt => answers = answers.concat(prompt.answers))
  for (let i = 0; i < answers.length; i++) {
    totalVoteCount += answers[i].votes.length
  }
  if (!isLastRound) {
    return totalVoteCount === players.length * 2 ? true : false
  } else {
    return totalVoteCount === players.length * 3 ? true: false
  }
}