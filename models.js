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

const RoomSchema = new Schema({
  players: [PlayerSchema],
  code: { type: String, unique: true },
  deck: [CardSchema],
  playerDeck: [CardSchema],
  numRounds: {type: Number, default: 3},
  gameType: {type: String, default: "Quiplash"}
});

export const Card = mongoose.model("Card", CardSchema)
export const Player = mongoose.model("Player", PlayerSchema)
export const Room = mongoose.model("Room", RoomSchema)