const sessionController = require('./session-controller');

let cookieController = {};

cookieController.setSSIDCookie = (err, req, res, id) => {
  if (err) {
    console.log(err);
  } else {
    console.log('setting the cookie', id);
    res.cookie('ssid', id, { httpOnly: true });
    sessionController.startSession(id);
  }
};

module.exports = cookieController;