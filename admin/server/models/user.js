// user.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

const SALT_WORK_FACTOR = 10;

// user schema
const userSchema = new Schema({
  email: {type: String, required: true, unique: true},
  password: {type: String, required: true},
  name: String,
  created_at: { type: Date, required: true, default: Date.now },
  updated_at: { type: Date, required: true, default: Date.now },
  user_type: {type: Array, required: true, default: ['admin']},
  blog_id: {type: String},
  token: String
});

// hashing user's password
userSchema.pre('save', function(next) {
  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(this.password, salt);
  this.password = hash;
  next();
});

module.exports = mongoose.model('User', userSchema);
