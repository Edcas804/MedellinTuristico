let Comercio = require('../../models/comercio');

beforeEach(() => (Comercio.allComercios = []));//resetea los datos en memoria en cada test

describe('Comercio.allComercios', () => {
  it('Comienza vacio', () => {
    expect(Comercio.allComercios.length).toBe(0);
  });
});

describe('Comercio.add', () => {
  it('agreamos uno nuevo', () => {
    expect(Comercio.allComercios.length).toBe(0); //validamos el estado previo

    let a = new Comercio(10, 'burguer', 'restaurante', 'en el centro', [
      35.45612,
      -35.789765,
    ]);
    Comercio.add(a);

    expect(Comercio.allComercios.length).toBe(1); //validamos el estado actual
    expect(Comercio.allComercios[0]).toBe(a); //validamos el estado actual
  });
});

describe('Comercio.findById', () => {
  it('debe retornar el comercio con id 10', () => {
    expect(Comercio.allComercios.length).toBe(0); //validamos el estado previo

    let a = new Comercio(10, 'burguer', 'restaurante', 'en el centro', [
      35.45612,
      -35.789765,
    ]);
    let b = new Comercio(11, 'burguer2', 'restaurante', 'en el centro', [
      35.45612,
      -35.789765,
    ]);

    Comercio.add(a);
    Comercio.add(b);
    expect(Comercio.allComercios.length).toBe(2); //validamos el estado actual
    let targetComercio = Comercio.findById(10);
    expect(targetComercio.id).toBe(10);
    expect(targetComercio.nombre).toBe(a.nombre);
  });
});

describe('Comercio.removeById', () => {
  it('Debe eliminar el comercio con id 10', () => {
    expect(Comercio.allComercios.length).toBe(0); //validamos el estado previo
	   
    let a = new Comercio(10, 'burguer', 'restaurante', 'en el centro', [
      35.45612,
      -35.789765,
    ]);
    Comercio.add(a);
	  expect(Comercio.allComercios.length).toBe(1);
	  Comercio.removeById(10);
	  expect(Comercio.allComercios.length).toBe(0);
  });
});
