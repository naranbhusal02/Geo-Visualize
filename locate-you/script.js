// Map Initialization

var map = L.map('map').setView([27.986065, 86.922623], 6);


// OSM layer
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
}).addTo(map);

var marker = L.marker([27.986065, 86.922623]).addTo(map)
    .bindPopup('The home of Developer.');

document.getElementById('coordinate-form').addEventListener('submit', function (event) {
    event.preventDefault();

    var latitude = parseFloat(document.getElementById('latitude').value);
    var longitude = parseFloat(document.getElementById('longitude').value);

    if (!Number.isFinite(latitude) || !Number.isFinite(longitude)) {
        alert('Enter valid latitude and longitude values.');
        return;
    }

    if (latitude < -90 || latitude > 90 || longitude < -180 || longitude > 180) {
        alert('Latitude must be between -90 and 90, and longitude must be between -180 and 180.');
        return;
    }

    var latLng = [latitude, longitude];

    marker.setLatLng(latLng)
        .setPopupContent('Got your location now youre cooked ' + latitude + ', ' + longitude)
        .openPopup();

    map.setView(latLng, 13);
});
