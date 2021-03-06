var Comercio = require('../models/comercio');

//lista de Establecimientos editables
exports.Establecimientos_list = function(req, res) {
  res.render('establecimientos/index', {establecimientos: Comercio.allComercios});
};


//crear
exports.Establecimientos_create_get = function(req, res) {
  res.render('establecimientos/create');
};
exports.Establecimientos_create_post = function(req, res) {
  var comer = new Comercio(
    req.body.id,
    req.body.nombre,
    req.body.tipo,
    req.body.descripcion,
  );
  comer.ubicacion = [req.body.lat, req.body.lng];

  Comercio.add(comer);

  res.redirect('/admin/establecimientos');
};
//actualizar
exports.Establecimientos_update_get = function(req, res) {
  let establecimiento = Comercio.findById(req.params.id);

  res.render('establecimientos/update', {establecimiento});
};
exports.Establecimientos_update_post = function(req, res) {
  let comercio = Comercio.findById(req.params.id);

  comercio.id = req.body.id;
  comercio.nombre = req.body.nombre;
  comercio.tipo = req.body.tipo;
  comercio.descripcion = req.body.descripcion;
  comercio.ubicacion = [req.body.lat, req.body.lng];

  res.redirect('/admin/establecimientos');
};

//eliminar
exports.Establecimientos_delete_post = function(req, res) {
  Comercio.removeById(req.body.id);
  res.redirect('/admin/establecimientos');
};
