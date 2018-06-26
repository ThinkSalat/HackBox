import { Room, Player } from './models';

require("babel-polyfill");

const resolvers = {
  Query: {
    rooms: () => Room.find(),
    players: () => Player.find(),
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
      console.log(room);
      
      // const player = new Player({ username });
      // await Room.findByIdAndUpdate(roomId, 
      //   {$push: { players: player }},
      //   {safe: true, upsert: true},
      //   function(err, room) {
      //     if (err) {
      //       console.log(err);
      //     } else {
      //       return room;
      //     }
      //   }
      // );
    },
  }
};

export default resolvers;