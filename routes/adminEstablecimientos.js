var express = require('express');
var router = express.Router();
var establecimientosConntroller = require('../controllers/comercio');
/* GET home page. */

//lista de Establecimientos editables
router.get('/', establecimientosConntroller.Establecimientos_list); 
//crear
router.get('/create', establecimientosConntroller.Establecimientos_create_get);
router.post('/create', establecimientosConntroller.Establecimientos_create_post);
//actualizar
router.get('/:id/update', establecimientosConntroller.Establecimientos_update_get);
router.post('/:id/update', establecimientosConntroller.Establecimientos_update_post);
//Eliminar
router.post('/:id/delete', establecimientosConntroller.Establecimientos_delete_post);

module.exports = router;
