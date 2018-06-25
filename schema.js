import { Room } from './models';

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
`;

export default typeDefs;