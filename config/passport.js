var User = require('../models/user');
var passport = require('passport');
var FacebookStrategy = require('passport-facebook').Strategy;
var OAuth = require('../secrets');

passport.use('facebook', new FacebookStrategy({
  clientID        : OAuth.fb.clientID,
  clientSecret    : OAuth.fb.clientSecret,
  callbackURL     : 'http://localhost:3000/auth/facebook/callback',
  enableProof     : true,
  profileFields   : ['name', 'emails']
}, function(access_token, refresh_token, profile, done) {

  // // Use this to see the information returned from Facebook
  // console.log(profile)

  process.nextTick(function() {

    User.findOne({ 'fb.id' : profile.id }, function(err, user) {
      if (err) return done(err);
      if (user) {
        return done(null, user);
      } else {

        var newUser = new User();
        newUser.fb.id           = profile.id;
        newUser.fb.access_token = access_token;
        newUser.fb.firstName    = profile.name.givenName;
        newUser.fb.lastName     = profile.name.familyName;
        newUser.fb.email        = profile.emails[0].value;

        newUser.save(function(err) {
          if (err)
            throw err;

          return done(null, newUser);
        });
      }

    });
  });
})); //here

passport.serializeUser(function(user, done) {
    console.log('HIIII');
  done(null, user._id);
});

passport.deserializeUser(function(id, done) {
  User.findById(id, function(err, user) {
    done(err, user);
  });
});

// console.log(passport);



module.exports.facebookAuthenticate = passport.authenticate('facebook', { scope: 'email'} );

module.exports.facebookCallback = passport.authenticate('facebook', {
  successRedirect: '/',
  failureRedirect: '/'
}), function(req, res) {
  // console.log('HERE');
};
