var express = require('express');
var router = express.Router();
var controller = require('../controllers/twatt')
var auth = require('../config/config')
var OAuth = require('oauth')



router.get('/', controller.getTimeline)


module.exports = router;
