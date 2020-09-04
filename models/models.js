const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
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