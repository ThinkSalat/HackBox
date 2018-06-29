"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Status = exports.Response = exports.Answer = exports.Room = exports.Player = exports.Card = undefined;

var _mongoose = require("mongoose");

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CardSchema = new _mongoose.Schema({
  text: String,
  prompt: String,
  cardType: String,
  numPrompts: Number,
  flavorText: String
});

var PlayerSchema = new _mongoose.Schema({
  username: String,
  score: { type: Number, default: 0 },
  hand: [CardSchema]
});

var AnswerSchema = new _mongoose.Schema({
  player: PlayerSchema,
  answers: [String],
  votes: [PlayerSchema]
});

var ResponseSchema = new _mongoose.Schema({
  prompt: CardSchema,
  answers: [AnswerSchema],
  players: [PlayerSchema]
});

var StatusSchema = new _mongoose.Schema({
  currentRound: { type: Number, default: false },
  status: { type: String, default: "Lobby" },
  gameOver: { type: Boolean, default: false },
  gameStarted: { type: Boolean, default: false },
  votingFinished: { type: Boolean, default: false },
  allResponsesReceived: { type: Boolean, default: false },
  timer: Number
});

var RoomSchema = new _mongoose.Schema({
  players: [PlayerSchema],
  code: { type: String, unique: true },
  discard: [CardSchema],
  numRounds: { type: Number, default: 3 },
  gameType: { type: String, default: "Quiplash" },
  prompts: [ResponseSchema],
  status: StatusSchema
});

var Card = exports.Card = _mongoose2.default.model("Card", CardSchema);
var Player = exports.Player = _mongoose2.default.model("Player", PlayerSchema);
var Room = exports.Room = _mongoose2.default.model("Room", RoomSchema);
var Answer = exports.Answer = _mongoose2.default.model("Answer", AnswerSchema);
var Response = exports.Response = _mongoose2.default.model("Response", ResponseSchema);
var Status = exports.Status = _mongoose2.default.model("Status", StatusSchema);