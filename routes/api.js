var express = require('express');
var router = express.Router();
var controller = require('../controller/controller')

// ============================================
// API
//=============================================
router.get('/api/home', controller.getHome)

router.get('/api/timeline', controller.getTimeline)


module.exports = router;
