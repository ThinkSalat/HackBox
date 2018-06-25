const n = null;

const resolvers = {
  Query: {
    rooms: () => Room.find()
  },
  Mutation: {
    createRoom: async (n, { code }) => {
      const room = new Room({ code });
      await room.save();
      return room;
    },
    removeRoom: async (n, { id }) => {
      await Room.findByIdAndRemove(id);
      return true;
    }
  }
}

export default resolvers;