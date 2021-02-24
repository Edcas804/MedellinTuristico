var Comercio = require('../../models/comercio');

exports.Comercios_list = function(req, res){
	res.status(200).json({
		comercios: Comercio.allComercios
	});
}
