var express = require('express');
var router = express.Router();
var api_twatt = require('../controller/api_tweet');

/* GET home page. */
router.get('/', api_twatt.awal);
/*  */
router.get('/search', api_twatt.search);
// router.get('/api', controller_twatt.search);

module.exports = router;
