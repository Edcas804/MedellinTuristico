var Comercio = function(id, nombre, tipo, descripcion, ubicacion) {
  this.id = id;
  this.nombre = nombre;	
  this.tipo = tipo;
  this.descripcion = descripcion;
  this.ubicacion = ubicacion;
};

Comercio.prototype.toString = function() {
  return (
    'id: ' + this.id + 'nombre:' +  this.nombre + 'tipo: ' + this.tipo + 'descripcion: ' + this.descripcion
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

var a = new Comercio(1, 'Santa Fe', 'restaurante', 'Para toda ocasión', [6.251393, -75.595614]);
var b = new Comercio(2, 'Santa Fe', 'Centro Comercial', 'Especializado en técnologia', [6.258633, -75.557135
]);                     
var c = new Comercio(3, 'Santa Fe', 'Centro Comercial', 'Especializado en técnologia', [6.209884, -75.566846
]);                      
var d = new Comercio(4, 'Santa Fe', 'Centro Comercial', 'Especializado en técnologia', [6.263218, -75.593429
]);                     
var e = new Comercio(5, 'Santa Fe', 'Centro Comercial', 'Especializado en técnologia', [6.267924, -75.556164
]);

//Comercio.add(a);
 //Comercio.add(b);
 //Comercio.add(c);
 //Comercio.add(d);
 //Comercio.add(e);

module.exports = Comercio;
