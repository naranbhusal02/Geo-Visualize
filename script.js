// Map Initialization

var map = L.map('map').setView([51.505, -0.09], 13);


// OSM layer
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([27.636807, 83.471610]).addTo(map)
    .bindPopup('The home of Developer.<br> Get me Down')
    .openPopup('Fuck off');