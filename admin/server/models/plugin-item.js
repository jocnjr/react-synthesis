// plugin-item.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const pluginItemSchema = new Schema({
  data_values: { type: Array, required: true },
});

module.exports = mongoose.model('PluginItem', pluginItemSchema);