const mongoose = require('mongoose');

export const Room = mongoose.model('Room', {
  code: String,
});