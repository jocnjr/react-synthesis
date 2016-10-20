const sessionController = require('./session-controller');

let cookieController = {};

cookieController.setSSIDCookie = (req, res, id) => {
  console.log('setting the cookie', id);
  res.cookie('ssid', id, { httpOnly: true });
  sessionController.startSession(id);
};

module.exports = cookieController;