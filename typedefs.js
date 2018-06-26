const typeDefs = `
  type Query {
    rooms: [Room],
    findRoom(code: String): Room
  }
  type Room {
    id: ID!
    code: String!
    players: [Player]
  }
  type Player {
    id: ID!
    username: String!
  }
  type Mutation {
    createRoom(code: String!): Room
    removeRoom(id: ID!): Boolean
    updateRoom(id: ID!, code: String!): Boolean
    addPlayer(code: String!, username: String!): Room
  }
  type Subscription {
    joinedRoom(code: String!): Room
  }
`;

export default typeDefs;