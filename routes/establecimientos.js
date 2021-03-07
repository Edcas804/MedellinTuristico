var express = require('express');
var router = express.Router();
var establecimientosController= require('../controllers/establecimientos');

//lista de establecimientos para el usuario
router.get('/', establecimientosController.Establecimientos_list_client);

//buscar y mostrar informació de un único comercio
router.get('/:id', establecimientosController.Establecimientos_findByNameURL);

module.exports = router;
