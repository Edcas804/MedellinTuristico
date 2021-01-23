var Comercio = require('../models/comercio');

exports.Comercios_list = function(req, res) {
   res.render('comercios/index', {comercios: Comercio.allComercios}); 
}

//crear
exports.Comercios_create_get = function(req, res) {
   res.render('comercios/create'); 
}
exports.Comercios_create_post= function(req, res) {

		var comer = new Comercio (req.body.id, req.body.tipo, req.body.descripcion);
    comer.ubicacion= [req.body.lat, req.body.lng];

		Comercio.add(comer);
		
		res.redirect('/comercios')
}
//actualizar
exports.Comercios_update_get = function(req, res) {
		let comercio = Comercio.findById(req.params.id);

   res.render('comercios/update', {comercio}); 
}
exports.Comercios_update_post= function(req, res) {

		let comercio = Comercio.findById(req.params.id);

		comercio.id = req.body.id;
		comercio.tipo = req.body.tipo;
		comercio.descripcion= req.body.descripcion;
		comercio.ubicacion= [req.body.lat, req.body.lng];

		
		res.redirect('/comercios')
}

//eliminar
exports.Comercios_delete_post = function(req, res){
		Comercio.removeById(req.body.id);
		res.redirect('/comercios')
}
