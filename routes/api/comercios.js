var express = require('express');
var router = express.Router();
var comerciosController = require('../../controllers/api/comercioControllerApi');

router.get('/', comerciosController.Comercios_list);


module.exports = router;
