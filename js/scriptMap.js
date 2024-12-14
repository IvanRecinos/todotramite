// Crear el mapa y establecer la vista inicial
const map = L.map('map').setView([14.6349, -90.5069], 13); // Coordenadas de inicio (Guatemala)

// Agregar capa de mapa (OpenStreetMap)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Evento para agregar marcadores al hacer clic en el mapa
map.on('click', function (e) {
  const { lat, lng } = e.latlng; // Obtén las coordenadas del clic
  L.marker([lat, lng])
    .addTo(map)
    .bindPopup(`Lat: ${lat.toFixed(5)}, Lng: ${lng.toFixed(5)}`)
    .openPopup();
});