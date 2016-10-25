var express = require('express');
var router = express.Router();
var controller = require('../controller/controller')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/oauth/home', controller.getHome)

router.get('/oauth/timeline', controller.getTimeline)

module.exports = router;
