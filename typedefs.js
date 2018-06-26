const typeDefs = `
  type Query {
    rooms: [Room],
    players: [Player],
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
  joinedRoom(roomId: ID!): Room
}
`;

export default typeDefs;