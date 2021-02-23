var Comercio = function(id, tipo, descripcion, ubicacion) {
  this.id = id;
  this.tipo = tipo;
  this.descripcion = descripcion;
  this.ubicacion = ubicacion;
};

Comercio.prototype.toString = function() {
  return (
    'id: ' + this.id + 'tipo: ' + this.tipo + 'descripcion: ' + this.descripcion
  );
};

Comercio.allComercios = [];

Comercio.add = function(aComercio) {
  Comercio.allComercios.push(aComercio);
};

Comercio.findById = function(aComercioId) {
  var aComercio = Comercio.allComercios.find(x => x.id == aComercioId);
  if (aComercio) return aComercio;
  else throw new Error('No existe un comercio con el id: ' + aComercioId);
};

Comercio.removeById = function(aComercioId) {
  for (let i = 0; i < Comercio.allComercios.length; i++) {
    if (Comercio.allComercios[i].id == aComercioId) {
      Comercio.allComercios.splice(i, 1);
      break;
    }
  }
};

var a = new Comercio(1, 'restaurante', 'Para toda ocasión', [-34.6, -58.38]);
var b = new Comercio(2, 'Centro Comercial', 'Especializado en técnologia', [
  -34.6,
  -58.38,
]);
var c = new Comercio(3, 'Centro Comercial', 'Especializado en técnologia', [
  -34.6,
  -58.38,
]);
var d = new Comercio(4, 'Centro Comercial', 'Especializado en técnologia', [
  -34.6,
  -58.38,
]);
var e = new Comercio(5, 'Centro Comercial', 'Especializado en técnologia', [
  -34.6,
  -58.38,
]);

Comercio.add(a);
Comercio.add(b);
Comercio.add(c);
Comercio.add(d);
Comercio.add(e);

module.exports = Comercio;
