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
    gameType: String!
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
    hand: [Card]
  }
  type Mutation {
    createRoom(code: String!): Room
    removeRoom(id: ID!): Boolean
    updateRoom(id: ID!, code: String!): Boolean
    buildDeck(code: String!, cardType: String!, numCards: Int!): Room
    addPlayer(code: String!, username: String!): Room
    addPlayerHand(code: String!, username: String!, numCards: Int!): Player
  }
  type Subscription {
    joinedRoom(code: String!): Room
    createdRoom: Room
    removedRoom: Boolean
  }
`;

export default typeDefs;