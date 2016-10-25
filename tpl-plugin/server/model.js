// templates's plugin
const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const %name%Schema = new Schema({
  // create schema based on your plugin structure
  /* ie:
  body: {type: String, required: true},
  created_at: { type: Date, required: true, default: Date.now },
  updated_at: { type: Date, required: true, default: Date.now },
  isApproved: {type: Boolean, required: true, default: false},
  author: {type: String, required: true},
  author_email: {type: String, required: true},
  post_id: {type: String, required: true}*/
});

module.exports = mongoose.model('%name%', %name%Schema);
