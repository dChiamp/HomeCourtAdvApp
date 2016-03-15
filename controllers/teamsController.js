var Team = require('../models/Team');

var teamsController = {
  indexTeams: function (req, res) {
    Team.find({}, function (err, teams){
      // err ? console.log(err) : res.status(200).send(JSON.stringify(teams));
      console.log(teams);
      err ? console.log(err) : res.render('index', {teams: teams});
    });
  },
  showTeam: function(req,res) {
    var id = req.params.id;
    Team.findById({_id: id}, function(err, team){
      console.log(team);
      err ? console.log(err) : res.render('teams/show', {team: team});
    });
  }
};

module.exports = teamsController;
