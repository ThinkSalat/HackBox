import { Room, Player, Card } from './models';
import { PubSub, withFilter } from 'graphql-subscriptions';

const pubsub = new PubSub();
const JOINED_ROOM = 'JOINED_ROOM';

require("babel-polyfill");

const resolvers = {
  Query: {
    rooms: () => Room.find(),
    findRoom: (_, { code }) => Room.findOne({ code })
  },
  Mutation: {
    createRoom: async (_, { code }) => {
      const room = new Room({ code });
      await room.save();
      return room;
    },
    removeRoom: async (_, { id }) => {
      await Room.findByIdAndRemove(id);
      return true;
    },
    updateRoom: async (_, { id, code }) => {
      await Room.findByIdAndUpdate(id, { code })
      return true;
    },
    buildQuiplashDeck: async (_, { code, numCards }) => {
      const room = Room.findOne({ code });
      const deck = Card.find({cardType: "Quiplash"})
      await  Room.update({ code }, { $push: {deck}})
      return room;
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
    }
  }
}

export default resolvers;