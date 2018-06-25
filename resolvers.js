import { Room } from './models';
const n = null;

require("babel-polyfill");


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
  }
};

export default resolvers;