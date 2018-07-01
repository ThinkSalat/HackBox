const typeDefs = `
  type Query {
    rooms: [Room]
    findRoom(code: String): Room
    findCards(cardType: String!, numCards: Int!): [Card]
    retrievePlayerPrompts(code: String!, username: String!): [Card]
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
    id: ID!
    currentRound: Int
    timer: Int
    status: String
    gameOver: Boolean
    gameStarted: Boolean
    answerPhase: Boolean
    votePhase: Boolean
    allAnswered: Boolean
    allVoted: Boolean
  }

  type Answer {
    id: ID!
    player: Player
    answers: [String]
    votes: [Player]
  }
  type Card {
    id: ID
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
    timer: Int
    status: String
    gameOver: Boolean
    gameStarted: Boolean
    answerPhase: Boolean
    votePhase: Boolean
    allAnswered: Boolean
    allVoted: Boolean
  }

  type Mutation {
    createRoom(code: String!, gameType: String, numRounds: Int): Room
    removeRoom(id: ID!): Boolean
    addPlayer(code: String!, username: String!): Player
    
    updateStatus(code: String!, options: StatusOptions!): Room
    retrieveAndAssignPrompts(code: String!, cardType: String!): [Card]
    addAnswerToResponse(responseId: String!, code: String!, username: String!, answers: [String!]): Response
    addVoteToAnswer(code: String!, username: String!, answerId: String!, responseId: String!): Answer
    addPlayerScore(code: String!, username: String!, points: Int!): Room
    addPlayerHand(code: String!, username: String!, numCards: Int!, cardType: String!): Room
  }
  
  type Subscription {
    joinedRoom(code: String!): Room
    createdRoom: Room
    removedRoom: String
    updateStatus(code: String!): Status
    playerSubmitted(code: String!): Player
    receivePrompts(code: String!): [Card]
  }
  
`;

export default typeDefs;