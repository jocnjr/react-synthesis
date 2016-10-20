const Session = require('../models/session');

var sessionController = {};

// middleware to create the token and save it to the
// database
sessionController.startSession = (cookieId, callback) => {
  console.log('saving github token in mongo', cookieId);
  var session = new Session();
  session.cookieId = cookieId;
  session.save(function(err){
      if (err) throw err;
    })
};

sessionController.isLoggedIn = (req, res, next) => {
  Session.findOne({cookieId: req.cookies.ssid}, (err, session) => {
  	if (err) throw err;
  	if (session){
  		if (session.cookieId === req.cookies.ssid){
  			console.log('session is active',req.cookies);
  			next();
  		}
  		else {
  			console.log('not active anymore', req.cookies)
  			res.redirect('/signup');
  		}
  	}
  	else {
        console.log('no session on db', req.cookies)
  			res.redirect('/components/login.html');
  		}
	});
  
};

module.exports = sessionController;