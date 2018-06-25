const { GraphQLServer } = require('graphql-yoga');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

const Room = mongoose.model('Room', {
  code: String,
});

const typeDefs = `
  type Query {
    rooms: [Room]
  }
  type Room {
    id: ID!
    code: String!
  }
  type Mutation {
    createRoom(code: String!): Room
    removeRoom(id: ID!): Boolean
  }
`

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
}

const server = new GraphQLServer({ typeDefs, resolvers })
mongoose.connection.once('open', function() {
  server.start(() => console.log('Server is running on localhost:4000'))
});