var express = require('express');
var router = express.Router();
var controller_twatt = require('../controller/controller_twatt');

/* GET home page. */
router.get('/', controller_twatt.awal);
/*  */
router.get('/search', controller_twatt.search);
// router.get('/api', controller_twatt.search);

module.exports = router;
