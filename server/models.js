import mongoose, {Schema} from 'mongoose';

const CardSchema = new Schema({
  text: String,
  prompt: String,
  cardType: String,
  numPrompts: Number,
  flavorText: String
});

const PlayerSchema = new Schema({
  username: String,
  score: {type: Number, default: 0},
  hand: [CardSchema]
});

const AnswerSchema = new Schema({
  player: PlayerSchema,
  answers: [String],
  votes: [PlayerSchema]
});

const ResponseSchema = new Schema({
  prompt: [CardSchema],
  answers: [AnswerSchema]
});

const RoomSchema = new Schema({
  players: [PlayerSchema],
  code: { type: String, unique: true },
  usedCards: [CardSchema],
  playerDeck: [CardSchema],
  numRounds: {type: Number, default: 3},
  gameType: {type: String, default: "Quiplash"}
});

const StatusSchema = new Schema({
  currentRound: Number,
  status: String,
  gameOver: Boolean,
  gameStarted: Boolean,
  votingFinished: Boolean,
  allResponsesReceived: Boolean,
  timer: Number
});

export const Card = mongoose.model("Card", CardSchema);
export const Player = mongoose.model("Player", PlayerSchema);
export const Room = mongoose.model("Room", RoomSchema);
export const Answer = mongoose.model("Answer", AnswerSchema);
export const Response = mongoose.model("Response", ResponseSchema);