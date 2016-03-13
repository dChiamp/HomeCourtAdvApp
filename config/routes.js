var express = require('express');
var router = express.Router();

// require our controllers
var teamsController = require('../controllers/teamsController');
var usersController = require('../controllers/usersController');
console.log(teamsController);
/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
//   res.render('index');
// });

router.route('/')
  .get(teamsController.index);
//team routes
router.route('/teams/:id')
  .get(teamsController.showTeam);
// router.route('/teams')
//   .get(teamsController.index);
//user routes
router.route('/users')
  .get(usersController.index);
  // .get(usersController)

module.exports = router;
