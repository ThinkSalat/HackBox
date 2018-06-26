import mongoose from 'mongoose';

export const Room = mongoose.model('Room', {
  code: String,
  players: Array,
});

export const Player = mongoose.model('Player', {
  username: String,
});