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
  type Subscription {
    joinedRoom(roomId: ID!): Room
  }
`;

export default typeDefs;