var express = require('express');
var router = express.Router();
var controller = require('../controller/controller')

// ============================================
// View
//=============================================
router.get('/', controller.viewHome);



module.exports = router;
