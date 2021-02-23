var mymap = L.map('main_map').setView([6.236317, -75.57156], 13);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png?{foo}', {
  foo: 'bar',
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(mymap);
var marker = L.marker([6.268195, -75.560735]).addTo(mymap);
marker.bindPopup("<b>Esta es mi primer coordenada!</b><br>todo funcionando Ok.");
