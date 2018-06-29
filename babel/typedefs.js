"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var typeDefs = "\n  type Query {\n    rooms: [Room],\n    findRoom(code: String): Room,\n    findCards(cardType: String!, numCards: Int!): [Card]\n  }\n  \n  type Room {\n    id: ID\n    code: String!\n    numRounds: Int!\n    gameType: String!\n    usedCards: [Card]\n    players: [Player]\n    playerDeck: [Card]\n    promptResponses: [Response]\n    status: [Status]\n  }\n  \n  type Response {\n    id: ID!\n    prompt: Card!\n    answers: [Answer]\n    players: [Player]\n  }\n\n  type Status {\n    currentRound: Int!\n    status: String!\n    gameOver: Boolean!\n    gameStarted: Boolean!\n    votingFinished: Boolean!\n    allResponsesReceived: Boolean!\n    timer: Int!\n  }\n\n  type Answer {\n    id: ID!\n    player: Player\n    answers: [String]\n    votes: [Player]\n  }\n  type Card {\n    id: ID!\n    text: String\n    prompt: String\n    cardType: String\n    numPrompts: Int\n    flavorText: String\n  }\n  \n  type Player {\n    id: ID!\n    username: String!\n    score: Int!\n    hand: [Card]\n  }\n  \n  type Mutation {\n    createRoom(code: String!, gameType: String, numRounds: Int): Room\n    removeRoom(id: ID!): Boolean\n    updateRoom(code: String!, key: String!, value: String!): Boolean\n    buildDeck(code: String!, cardType: String!, numCards: Int!): Room\n    addPlayer(code: String!, username: String!): Room\n    addPlayerHand(code: String!, username: String!, numCards: Int!, cardType: String!): Room\n    addPlayerScore(code: String!, username: String!, points: Int!): Room\n    addAnswerToResponse(responseId: Int!): Response\n  }\n  \n  type Subscription {\n    joinedRoom(code: String!): Room\n    createdRoom: Room\n    removedRoom: String\n  }\n  \n";

exports.default = typeDefs;
// **GAME LOGIC **

// show instructions
// create new responses
// takes in a game code, and a prompt card
// assign 2 random players to the response
// create answer that will take in a game code, [text], player, responseId
// that will add that players answer into the answers array for that player.