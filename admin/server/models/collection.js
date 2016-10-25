// collection.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const collectionSchema = new Schema({
  title: {type: String, required: true},
  collection_properties: { type: Array, required: true },
  created_at: { type: Date, required: true, default: Date.now },
  updated_at: { type: Date, required: true, default: Date.now },
  user_id: {type: Number, required: true}
});

module.exports = mongoose.model('Collection', collectionSchema);