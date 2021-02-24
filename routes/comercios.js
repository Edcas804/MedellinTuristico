var express = require('express');
var router = express.Router();
var comerciosController = require('../controllers/comercio');
/* GET home page. */

router.get('/', comerciosController.Comercios_list); 
//crear
router.get('/create', comerciosController.Comercios_create_get);
router.post('/create', comerciosController.Comercios_create_post);
//actualizar
router.get('/:id/update', comerciosController.Comercios_update_get);
router.post('/:id/update', comerciosController.Comercios_update_post);
//Eliminar
router.post('/:id/delete', comerciosController.Comercios_delete_post);

module.exports = router;
