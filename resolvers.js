import { Room, Player, Card } from './models';
import { PubSub, withFilter } from 'graphql-subscriptions';

const pubsub = new PubSub();
const JOINED_ROOM = 'JOINED_ROOM';
const CREATED_ROOM = 'CREATED_ROOM';
const REMOVED_ROOM = 'REMOVED_ROOM';

require("babel-polyfill");

const resolvers = { 
  Query: {
    rooms: () => Room.find(),
    findRoom: (_, { code }) => Room.findOne({ code }),
    findCards: (_, { cardType, numCards }) => Card.aggregate().match({ cardType }).sample(numCards),
  },
  Mutation: {
    createRoom: async (_, { code }) => {
      const room = new Room({ code });
      await room.save();
      pubsub.publish(CREATED_ROOM, { createdRoom: room })
      return room;
    },
    removeRoom: async (_, { id }) => {
      await Room.findByIdAndRemove(id);
      pubsub.publish(REMOVED_ROOM, { removedRoom: true })
      return true;
    },
    updateRoom: async (_, { id, code }) => {
      await Room.findByIdAndUpdate(id, { code })
      return true;
    },
    buildDeck: async (_, {code, cardType,numCards}) => {
      const deck = await Card.aggregate().match({ cardType }).sample(numCards).exec()
      return await Room.findOneAndUpdate({ code }, { $set: { deck }})
    },
    addPlayer: async (_, { code, username }) => {
      const room = Room.findOne({ code });
      const player = new Player({ username, score: 0 });
      await Room.update(
        { code }, 
        {$push: { players: player }}
      );
      pubsub.publish(`${JOINED_ROOM}.${code}`, { joinedRoom: room })
      return room;
    }
  },
  Subscription: {
    joinedRoom: {
      subscribe: (_, { code }) => pubsub.asyncIterator(`${JOINED_ROOM}.${code}`),
    },
    createdRoom: {
      subscribe: () => pubsub.asyncIterator(CREATED_ROOM)
    },
    removedRoom: {
      subscribe: () => pubsub.asyncIterator(REMOVED_ROOM)
    }    
  }
}

export default resolvers;
