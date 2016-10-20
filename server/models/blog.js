// blog.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// blog schema
const blogSchema = new Schema({
  title: {type: String, required: true},
  description: {type: String, required: true},
  user_id: {type: String, required: true},
  blog_id: {type: String, required: true},  
  created_at: { type: Date, required: true, default: Date.now },
  updated_at: { type: Date, required: true, default: Date.now }
});

module.exports = mongoose.model('Blog', blogSchema);
