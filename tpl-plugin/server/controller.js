const %name% = require('./model');

let controller = {};

// creating the post on mongo
controller.createComment = (req, res) => {
  let bodyObj = req.body;

  // edit here: add all properties from request
  var newItem = new %name%();
  // ie: newItem.author = bodyObj.author;
  // ie: newItem.post_id = bodyObj.post_id;

  newItem.save(function(err){
    if (err) {
      console.log(err);
      throw err;
    }
  });

  res.sendStatus(200);
};

//listing all the items
controller.getAll = (req, res) => {
    %name%.find({}, (err, result) => {
      if (err) return res.status(500).send(err);
      return res.json(result); 
    });
  };

//listing plugin by id
controller.byId = (req, res) => {
  %name%.findById(req.params.%name%_id, (err, result) => {
    if (err) return res.status(500).send(err);
    return res.json(result); 
  });
};

//updating plugin by id - moderation
controller.updateById = (req, res) => {
  %name%.findByIdAndUpdate(req.params.%name%_id, req.body, (err, result) => {
    if (err) return res.status(500).send(err);
    return res.status(200).send(result);
  });
};

//deleting plugin by id
controller.deleteById = (req, res) => {
  %name%.findByIdAndRemove(req.params.%name%_id, (err, result) => {
    if (err) return res.status(500).send(err);
    return res.status(200).send('%name% deleted!');
  });
};

module.exports = controller;
