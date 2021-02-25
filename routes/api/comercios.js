var express = require('express');
var router = express.Router();
var comerciosController = require('../../controllers/api/comercioControllerApi');

router.get('/', comerciosController.Comercios_list);
router.post('/create', comerciosController.Comercios_create_post);
router.post('/update', comerciosController.Comercios_update_post);

module.exports = router;
