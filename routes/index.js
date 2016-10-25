var express = require('express');
var router = express.Router();
var controller = require('../controllers/twatt')
var auth = require('../config/config')
var OAuth = require('oauth')


/* GET home page. */
router.get('/', controller.getHome)

router.get('/search', controller.getSearch)


router.get('/oauth/search', controller.getSearchOauth);

router.get('/oauth/timeline', controller.getTimelineOauth);


router.get('/twit/search', controller.getSearchTwit)

// router.get('/twit/timeline', controller.getTimelineTwit)


module.exports = router;
