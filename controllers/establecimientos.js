var Comercio = require('../models/comercio');
//lista de Establecimientos para el usuario
exports.Establecimientos_list_client = function (req, res){
    res.render('establecimientos/indexClient', {establecimientos: Comercio.allComercios})
}
exports.Establecimientos_findAndShow = function (req, res){
    let establecimiento = Comercio.findById(req.params.id);
//	res.status(200).json({establecimiento});
	res.render('establecimientos/detalle', {establecimiento})
}
