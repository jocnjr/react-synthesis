//secret to session authentication
//this file should be always gitignored
const config = require('../../config');

module.exports = {
  sessionSecret: config.sessionSecret
};