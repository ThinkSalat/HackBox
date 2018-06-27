import { Room, Player, Card } from './models';
import { PubSub, withFilter } from 'graphql-subscriptions';

const pubsub = new PubSub();
const JOINED_ROOM = 'JOINED_ROOM';

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

//fisher-yates shuffle from so
const shuffle = array => {
  for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}