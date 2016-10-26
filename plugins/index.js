// index.js
// gather components in plugin folder for export
const DataManager = require('./DataManager/containers/DataManager');
const PostManager = require('./PostManager/containers/PostManager');
const Comments = require('./Comments/components/Comments');

// import plugin config
const DataManagerData = require('./DataManager/plugin.synth');
const PostManagerData = require('./PostManager/plugin.synth');
const CommentsData = require('./Comments/plugin.synth');

module.exports = { DataManager, DataManagerData, PostManager, PostManagerData, Comments, CommentsData }
