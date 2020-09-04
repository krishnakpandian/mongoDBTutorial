const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  fName: {
    type: String,
    required: true
  },
  lName: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true
  }
});

module.exports = mongoose.model('User', UserSchema);