var mymap = L.map('main_map').setView([6.236317, -75.57156], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png?{foo}', {
  foo: 'bar',
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(mymap);


$.ajax({
  dataType: 'json',
  url: '/api/comercios',
  success: function(result) {
//    console.log(result);
    result.comercios.forEach(comer => {
      L.marker(comer.ubicacion, {title: comer.id})
        .addTo(mymap)
        .bindPopup(
         `<p>
          ${comer.id} <br />
          ${comer.tipo} <br />
          ${comer.descripcion} <br />
		  </p>` 
        );
    });
  },
});
