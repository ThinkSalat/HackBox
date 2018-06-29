const typeDefs = `
  type Query {
    rooms: [Room],
    findRoom(code: String): Room,
    findCards(cardType: String!, numCards: Int!): [Card]
  }
  
  type Room {
    id: ID
    code: String!
    numRounds: Int!
    gameType: String!
    usedCards: [Card]
    players: [Player]
    playerDeck: [Card]
    promptResponses: [Response]
    status: [Status]
  }
  
  type Response {
    id: ID!
    prompt: Card!
    answers: [Answer]
    players: [Player]
  }

  type Status {
    currentRound: Int!
    status: String!
    gameOver: Boolean!
    gameStarted: Boolean!
    votingFinished: Boolean!
    allResponsesReceived: Boolean!
    timer: Int!
  }

  type Answer {
    id: ID!
    player: Player
    answers: [String]
    votes: [Player]
  }
  type Card {
    id: ID!
    text: String
    prompt: String
    cardType: String
    numPrompts: Int
    flavorText: String
  }
  
  type Player {
    id: ID!
    username: String!
    score: Int!
    hand: [Card]
  }
  
  type Mutation {
    createRoom(code: String!, gameType: String, numRounds: Int): Room
    removeRoom(id: ID!): Boolean
    updateRoom(id: ID!, code: String!): Boolean
    buildDeck(code: String!, cardType: String!, numCards: Int!): Room
    addPlayer(code: String!, username: String!): Room
    addPlayerHand(code: String!, username: String!, numCards: Int!, cardType: String!): Room
    addPlayerScore(code: String!, username: String!, points: Int!): Room
    addAnswerToResponse(responseId: Int!): Response
    updateStatus(code: String!, status: Status ): Status
  }
  
  type Subscription {
    joinedRoom(code: String!): Room
    createdRoom: Room
    removedRoom: String
  }
  
`;

export default typeDefs;
// **GAME LOGIC **

// show instructions
// create new responses
// takes in a game code, and a prompt card
// assign 2 random players to the response
// create answer that will take in a game code, [text], player, responseId
// that will add that players answer into the answers array for that player.
