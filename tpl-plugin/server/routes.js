const controller = require('./controller');

module.exports = function(app) {

  // ** %name% routes **
  // %name% creation route

  app.post('/api/%name%', controller.create);

  // listing all the comments
  app.get('/api/%name%', controller.getAll);

  // listing comment by id
  app.get('/api/%name%/:%name%_id', controller.byId);

  // updating a specific comment
  app.put('/api/%name%/:%name%_id', controller.updateById);

  // deleting a specific comment
  app.delete('/api/%name%/:%name%_id', controller.deleteById);
};