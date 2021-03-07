var Comercio = require('../models/comercio');
//lista de Establecimientos para el usuario
exports.Establecimientos_list_client = function (req, res){
    res.render('establecimientos/indexClient', {establecimientos: Comercio.allComercios})
}
exports.Establecimientos_findByNameURL = function (req, res){
    let establecimiento = Comercio.findByNameURL(req.params.id);

	res.render('establecimientos/detalle', {establecimiento})
}
