var User = require('../models/user');

var usersController = {
  index: function (req, res) {
    User.find({},function(err, users) {
      err ? console.log(err): res.json(users)
    });
  }
}
module.exports = usersController;
