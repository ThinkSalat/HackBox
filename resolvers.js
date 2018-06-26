import { Room, Player } from './models';
import { PubSub, withFilter } from 'graphql-subscriptions';
import { Subscription } from 'react-apollo';

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
    addPlayer: async (_, { code, username }) => {
      const room = Room.findOne({ code });
      const player = new Player({ username, score: 0 });

      await Room.update(
        { code }, 
        {$push: { players: player }}
      );
      pubsub.publish(JOINED_ROOM, { joinedRoom: room })
      return room;
    }
  },
  Subscription: {
    joinedRoom: {
      subscribe: withFilter( 
        () => pubsub.asyncIterator(JOINED_ROOM), 
        (payload, variables, context) => {
          return variables.code
          return payload.joinedRoom.code == code
        }
      )
    }
  }
}

export default resolvers;