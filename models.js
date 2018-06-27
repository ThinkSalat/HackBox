import mongoose, {Schema} from 'mongoose';

const PlayerSchema = new Schema({
  username: String,
  score: Number
});

const RoomSchema = new Schema({
  players: [PlayerSchema],
  code: { type: String, unique: true },
});

export const Room = mongoose.model("Room", RoomSchema);
export const Player = mongoose.model("Player", PlayerSchema);