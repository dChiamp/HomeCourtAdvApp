var User = require('../models/user');

var usersController = {
  index: function (req, res) {
    User.find({},function(err, users) {
      err ? console.log(err): res.json(users)
    });
  },
  showUser: function (req, res) {
    var id = req.params.id
    User.find({_id: id}, function(err, user){
      err ? console.log(err) : res.json({user});
    })
  },
  edit: function (req, res) {
    var id = req.params.id
    User.find({_id: id}, function(err, user){
      err ? console.log(err) : res.json({user});
    })

    var about = req.body.about
    var picture = req.body.picture
    var favorites = req.body.favorites

    User.find({_id: id}, function(err, user){
      if (err) console.log(err);
      if (about) user.about = about;
      if (picture) user.picture = picture;
      if  (favorites) user.favorites = favorites
    })

    User.save({id}, function(err, data){
      console.log(err)
    })

  },
    // patch: function(req,res) {}
  delete: function(req, res) {
    var id = req.params.id
    User.delete(id, function(err, data){
      if (err) console.log(err);
    })
  }
}
module.exports = usersController;
