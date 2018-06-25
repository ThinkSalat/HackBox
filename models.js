import mongoose from 'mongoose';

export const Room = mongoose.model('Room', {
  code: String,
});