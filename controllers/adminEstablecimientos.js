var Comercio = require('../models/comercio');

//lista de Establecimientos editables
exports.Establecimientos_list = function(req, res) {
  res.render('admin/index', {establecimientos: Comercio.allComercios});
};

//crear
exports.Establecimientos_create_get = function(req, res) {
  res.render('admin/create');
};
exports.Establecimientos_create_post = function(req, res) {
  let nombre = req.body.nombre.toUpperCase();
  let descripcion0 = req.body.descripcion;
  let descripcion1 = descripcion0.charAt(0).toUpperCase();
  let descripcion2 = descripcion0
    .substring(1, descripcion0.length)
    .toLowerCase();
  let descripcionAll = descripcion1.concat(descripcion2);
  var comer = new Comercio(req.body.id, nombre, req.body.tipo, descripcionAll);
  comer.ubicacion = [req.body.lat, req.body.lng];

  Comercio.add(comer);

  res.redirect('/admin/establecimientos');
};
//actualizar
exports.Establecimientos_update_get = function(req, res) {
  let establecimiento = Comercio.findById(req.params.id);

  res.render('admin/update', {establecimiento});
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
