// index.js
// gather components in plugin folder for export
const DataManager = require('./DataManager/containers/DataManager');
const PostManager = require('./post-manager/containers/Posts');
const PostFeed = require('./post/containers/PostFeed');
const Comments = require('./Comments/components/Comments');

// import plugin config
const DataManagerData = require('./DataManager/plugin.synth');
const PostManagerData = require('./post-manager/plugin.synth');
const PostFeedData = require('./post/plugin.synth');
const CommentsData = require('./Comments/plugin.synth');

module.exports = { DataManager, DataManagerData, PostManager, PostManagerData, PostFeed, PostFeedData, Comments, CommentsData }
