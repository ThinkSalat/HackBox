const typeDefs = `
  type Query {
    rooms: [Room]
    findRoom(code: String): Room
    findCards(cardType: String!, numCards: Int!): [Card]
  }
  type Room {
    id: ID
    code: String!
    numRounds: Int!
    gameType: String!
    discard: [Card]
    players: [Player]
    prompts: [Response]
    status: Status
  }
  
  type Response {
    id: ID!
    prompt: Card!
    roundNumber: Int!
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
    timer: Int
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

  input StatusOptions {
    currentRound: Int
    status: String
    gameOver: Boolean
    gameStarted: Boolean
    votingFinished: Boolean
    allResponsesReceived: Boolean
    timer: Int
  }

  type Mutation {
    createRoom(code: String!, gameType: String, numRounds: Int): Room
    removeRoom(id: ID!): Boolean
    retrieveCards(code: String!, numCards: Int!, cardType: String!): [Card]
    addPlayer(code: String!, username: String!): Player
    addPlayerHand(code: String!, username: String!, numCards: Int!, cardType: String!): Room
    addPlayerScore(code: String!, username: String!, points: Int!): Room
    addAnswerToResponse(responseId: String!, code: String!, username: String!, answers: [String!]): Response
    updateStatus(code: String!, options: StatusOptions!): Room
    retrieveAndAssignPrompts(code: String!, cardType: String!, roundNumber: Int!): [Card]
    addVoteToAnswer(code: String!, username: String!, answerId: String!, responseId: String!): Answer
  }
  
  type Subscription {
    joinedRoom(code: String!): Room
    createdRoom: Room
    removedRoom: String
    updateStatus(code: String!): Status
  }
  
`;

export default typeDefs;