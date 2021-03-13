var express = require('express');
var router = express.Router();
var establecimientosController = require('../controllers/establecimientos');
/* GET home page. */
router.get('/', establecimientosController.Establecimientos_list_home_get);

module.exports = router;
