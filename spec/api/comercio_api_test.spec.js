let Comercio = require('../../models/comercio');
let request = require('request');
let s6erver = require('../../bin/www');

beforeEach(() => (Comercio.allComercios = []));//resetea los datos en memoria en cada test

describe('Comercio API', () => {
  describe('GET COMERCIOS /', () => {
    it('Status 200', () => {
      expect(Comercio.allComercios.length).toBe(0); //validamos el estado previo

      let a = new Comercio(10, 'burguer', 'restaurante', 'en el centro', [
        35.45612,
        -35.789765,
      ]);
      Comercio.add(a);

      request.get('http://localhost:3000/api/comercios', function(
        error,
        response,
        body,
      ) {
        expect(response.statusCode).toBe(200);
      });
    });
  });

  describe('POST COMERCIOS /create', () => {
    it('STATUS 200', done => {
      let headers = {'content-type': 'application/json'};
      let comer1 =
        '{"id":16,"nombre":"Burguer","tipo":"Restaurante","descripcion":"Para toda la family","ubicacion":[6.308336,-75.561559]}';

      request.post(
        {
          headers: headers,
          url: 'http://localhost:3000/api/comercios/create',
          body: comer1,
        },
        function(error, response, body) {
          expect(response.statusCode).toBe(200);
          expect(Comercio.findById(16).id).toBe(16);
          done();
        },
      );
    });
  });
});
