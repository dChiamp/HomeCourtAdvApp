var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var LoginSchema = new Schema({

fb: {
    id: String,
    access_token: String,
    firstName: String,
    lastName: String,
    email: String
  // },
  // google: {
  //   id: String,
  //   access_token: String,
  //   firstName: String,
  //   lastName: String,
  //   email: String
  // }
  }

});

var Login = mongoose.model('Login', LoginSchema);
module.exports = Login;
