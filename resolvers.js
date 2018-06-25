import { Room } from './models';
const n = null;

const resolvers = {
  Query: {
    rooms: () => Room.find()
  },
  Mutation: {
     createRoom: (_, { code }) => {
      const room = new Room({ code });
       room.save();
      return room;
    },
    removeRoom: (_, { id }) => {
       Room.findByIdAndRemove(id);
      return true;
    }
  }
};

export default resolvers;