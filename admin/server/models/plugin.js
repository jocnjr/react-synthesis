// collection.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const pluginSchema = new Schema({
  name: {type: String, required: true, index: { unique: true }},
  mount_point: {type: String, required: true},  
  plugin_properties: { type: Array }
});

module.exports = mongoose.model('Plugin', pluginSchema);