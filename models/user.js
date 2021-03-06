const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  // _id: { type: Schema.Types.ObjectId, required: true },
  userName: { type: String, required: true, unique: true },
  password: { type: String, required: true }
})

const User = mongoose.model('user', userSchema);

module.exports = User;