//post.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const postSchema = new Schema({
  title: {type: String, required: true},
  body: {type: String, required: true},
  created_at: { type: Date, required: true, default: Date.now },
  updated_at: { type: Date, required: true, default: Date.now },
  pub_date: { type: Date, required: true, default: Date.now },
  status: {type: String, required: true, default: "draft"},
  user_id: {type: String, required: true},
  post_type: {type: Array, required: true, default: ['post']},
  img_urls: {type: Array, default: []},
  video_urls: {type: Array, default: []},
  uri: {type: String, default: ""},
  n_comments: {type: Number, default: 0}
});

module.exports = mongoose.model('Post', postSchema);
