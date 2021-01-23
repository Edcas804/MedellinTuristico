var express = require('express');
var router = express.Router();
var comerciosControler = require('../controllers/comercio');
/* GET home page. */

router.get('/', comerciosControler.Comercios_list); 
//crear
router.get('/create', comerciosControler.Comercios_create_get);
router.post('/create', comerciosControler.Comercios_create_post);
//actualizar
router.get('/:id/update', comerciosControler.Comercios_update_get);
router.post('/:id/update', comerciosControler.Comercios_update_post);
//Eliminar
router.post('/:id/delete', comerciosControler.Comercios_delete_post);

module.exports = router;
