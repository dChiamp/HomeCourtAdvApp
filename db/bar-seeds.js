var mongoose = require('mongoose'),
        conn = mongoose.connect('mongodb://localhost/HCA-app'),
         Bar = require("../models/bar");


Bar.remove({}, function(err){
  if (err) console.log("ERROR: ", err);
});

var bars = [
  {
    name: "beer garden",
    address: "225 bush st",
    city: "SF",
    state: "CA",
    lat: 37.790882,
    long: -122.401552
  },
    {
    name: "fear garden",
    address: "666 death ave",
    city: "Oakland",
    state: "CA",
    lat: 37.790230,
    long: -122.408439
  }
];

Bar.create(bars, function(err, bars){
    if (err) {
    console.log(err);
  } else {
    console.log("created: ", bars);
    mongoose.connection.close();
  }
});