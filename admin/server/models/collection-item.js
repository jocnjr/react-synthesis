// collection-item.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const collectionItemSchema = new Schema({
  item_properties: { type: Array, required: true },
  created_at: { type: Date, required: true, default: Date.now },
  updated_at: { type: Date, required: true, default: Date.now },
  user_id: {type: Number, required: true},
  collection_id: {type: String, required: true}
});

module.exports = mongoose.model('CollectionItem', collectionItemSchema);