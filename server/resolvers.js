import { Room, Player, Card, Status, Answer, Response } from './models';
import { PubSub, withFilter } from 'graphql-subscriptions';

const pubsub = new PubSub();
const JOINED_ROOM = 'JOINED_ROOM';
const CREATED_ROOM = 'CREATED_ROOM';
const REMOVED_ROOM = 'REMOVED_ROOM';
const UPDATE_STATUS = 'UPDATE_STATUS';
require("babel-polyfill");

const resolvers = { 
  Query: {
    rooms: () => Room.find(),
    findRoom: (_, { code }) => Room.findOne({ code }),
    findCards: (_, { cardType, numCards }) => Card.aggregate().match({ cardType }).sample(numCards),
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
      let player;
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
    retrieveCards: async (_, {code, numCards, cardType}) => {
      const discard = await Card.aggregate().match({ cardType }).sample(numCards).exec()
      return await Room.findOneAndUpdate({ code }, { $set: { discard }})
    },
    updateStatus: async (_, { code, options }) => {
      await Room.findOneAndUpdate({code}, { $set: { status: options } })
      const room = await Room.findOne({code})
      const {status} = room
      pubsub.publish(`${UPDATE_STATUS}.${code}`, { updateStatus: status})
      return room;
    },
    retrieveAndAssignPrompts: async (_, { code, cardType }) => {
      const room = await Room.findOne({code});
      const { players, discard, numRounds, status } = room._doc;

      const numCards = numRounds !== status.currentRound ? room.players.length : 1
      const ids = discard.map( card => card.id);

      const prompts = await Card.aggregate().match({ cardType, id: {$nin: ids } }).sample(numCards).exec()
      let promptObjects = getPromptsObject(players, numCards, prompts);

      await Room.findOneAndUpdate({code}, {$push: { discard: prompts, prompts: promptObjects}})

      return prompts;
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
    }
  }
}

export default resolvers;

const getPromptsObject = (rcvdPlayers, numCards, prompts) => {
  let promptObjects;
  let playerMatchups = buildMatchups(rcvdPlayers);

  if (numCards === 1) {
    promptObjects = [new Response({ prompt: prompts[0], players: rcvdPlayers })]
  } else {
    promptObjects = prompts.map( prompt => {
      const players = playerMatchups.pop()
      return new Response({ prompt, players })
    })
  }
  return promptObjects;
}

const buildMatchups = players => {
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