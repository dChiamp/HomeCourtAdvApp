var Login = require('../models/login');
var Passport = require("../config/passport");


var loginController = {
  authenticate: function (req,res) {
    passport.authenticate('facebook', { scope: 'email'});
  },
  callback: function (req, res) {
      passport.authenticate('facebook', {
      successRedirect: 'index', failureRedirect: 'index'
    });
  },
  logout: function (req, res) {
    req.logout();
    res.redirect('index')
  }
};


module.exports = loginController;
