const typeDefs = `
  type Query {
    rooms: [Room],
    findRoom(code: String): Room,
    findCards(cardType: String!, numCards: Int!): [Card]
  }
  type Room {
    id: ID!
    code: String!
    numRounds: Int!
    deck: [Card]
    players: [Player]
  }
  type Card {
    id: ID!
    text: String
    prompt: String
    cardType: String
    numPrompts: Int
  }
  type Player {
    id: ID!
    username: String!
    score: Int!
  }
  type Mutation {
    createRoom(code: String!): Room
    removeRoom(id: ID!): Boolean
    updateRoom(id: ID!, code: String!): Boolean
    buildQuiplashDeck(code: String!, numCards: Int!): Room
    addPlayer(code: String!, username: String!): Room
  }
  type Subscription {
    joinedRoom(code: String!): Room
  }
`;

export default typeDefs;