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
  prompt: CardSchema,
  roundNumber: Number,
  answers: [AnswerSchema],
  players: [PlayerSchema]
});

const StatusSchema = new Schema({
  currentRound: {type: Number, default: 1},
  timer: {type: Number, default: 60},
  status: {type: String, default: "Lobby"},
  gameOver: {type: Boolean, default: false},
  gameStarted: {type: Boolean, default: false},
  answerPhase: {type: Boolean, default: false},
  votePhase: {type: Boolean, default: false},
});

const RoomSchema = new Schema({
  players: [PlayerSchema],
  code: { type: String, unique: true },
  discard: [CardSchema],
  numRounds: {type: Number, default: 3},
  gameType: {type: String, default: "Quiplash"},
  prompts: [ResponseSchema],
  status: StatusSchema
});

export const Card = mongoose.model("Card", CardSchema);
export const Player = mongoose.model("Player", PlayerSchema);
export const Room = mongoose.model("Room", RoomSchema);
export const Answer = mongoose.model("Answer", AnswerSchema);
export const Response = mongoose.model("Response", ResponseSchema);
export const Status = mongoose.model("Status", StatusSchema);