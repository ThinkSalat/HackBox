import { Room } from './models';
import { PubSub, withFilter } from 'graphql - subscriptions';
import { Subscription } from 'react-apollo';
const n = null;

require("babel-polyfill");

const pubsub = new PubSub();
const JOINED_ROOM = 'JOINED_ROOM';

const resolvers = {
  Query: {
    rooms: () => Room.find()
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
    }
  },
  Subscription: {
      joinedRoom: {
      subscribe: () => pubsub.asyncIterator(JOINED_ROOM),
    },
  },
};

export default resolvers;