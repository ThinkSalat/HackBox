import mongoose, {Schema} from 'mongoose';

const PlayerSchema = new Schema({
  username: String,
  score: Number
});

const RoomSchema = new Schema({
  players: [PlayerSchema],
  code: String
});

export const Room = mongoose.model("Room", RoomSchema);
export const Player = mongoose.model("Player", PlayerSchema);