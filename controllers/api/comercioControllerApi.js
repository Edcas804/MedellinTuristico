var Comercio = require('../../models/comercio');

//lista total
exports.Comercios_list = function(req, res) {
  res.status(200).json({
    comercios: Comercio.allComercios,
  });
};
//crear
exports.Comercios_create_post = function(req, res) {
  let comer = new Comercio(
    req.body.id,
    req.body.nombre,
    req.body.tipo,
    req.body.descripcion,
  );
  comer.ubicacion = [req.body.lat, req.body.lng];

  Comercio.add(comer);

  res.status(200).json({comercio: comer});
};
//actualizar
exports.Comercios_update_post = function(req, res) {
  let comercio = Comercio.findById(req.body.id);

  comercio.id = req.body.id;
  comercio.nombre = req.body.nombre;
  comercio.tipo = req.body.tipo;
  comercio.descripcion = req.body.descripcion;
  comercio.ubicacion = [req.body.lat, req.body.lng];

  res.status(204).json({comercio: comercio})
};
