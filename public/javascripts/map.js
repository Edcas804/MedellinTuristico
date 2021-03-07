var mainView = [6.236317, -75.57156];
var mymap = L.map('main_map').setView(mainView, 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png?{foo}', {
  foo: 'bar',
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
opacity: .5, 
	riseOnHover: true
}).addTo(mymap);

$.ajax({
  dataType: 'json',
  url: '/api/comercios',
  success: function(result) {
    result.comercios.forEach(comer => {
      L.marker(comer.ubicacion, {title: comer.nombre})
        .addTo(mymap)
        .bindPopup(
          `<p>
         <b>${comer.nombre}</b> <br />
          ${comer.tipo} <br />
          ${comer.descripcion} <br />
		  </p>`,
        );
    });
  },
});

const showInMap = (lat, lng) => {

  L.circle([lat, lng], {
    color: '#f00',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 500,
  }).addTo(mymap);
  document.querySelectorAll('.wrapperMapModal')[0].classList.remove('hide');
};
if(document.querySelectorAll('.wrapperMapModal')[0]){
    document.querySelectorAll('.wrapperMapModal')[0].classList.add('hide')
}
if (navigator.geolocation) {
  //check if geolocation is available
  navigator.geolocation.watchPosition(function(position) {
    L.marker([position.coords.latitude, position.coords.longitude])
      .addTo(mymap)
      .bindPopup(`<p>Tu estás aquí</p>`);
    L.circle([position.coords.latitude, position.coords.longitude], {
      color: '#0af',
      fillColor: '#0cf',
      fillOpacity: 0.5,
      radius: 500,
    }).addTo(mymap);
  });
}
