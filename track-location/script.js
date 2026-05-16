var map = L.map('map').setView([27.7, 83.5],9);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);


    if(!navigator.geolocation.getCurrentPosition) {
        console.log("Your browser doesnt support this feature");
    }
    else {
        navigator.geolocation.getCurrentPosition(getPosition)
    }

    function getPosition(position) {
        console.log(position);
        var lat = position.coords.latitude;
        var long = position.coords.longitude;
        var accuracy = position.coords.accuracy;

        console.log('Your current coordinate is: ' + lat + ' and ' + long + ' accuracy: ' + accuracy);

        var circle = L.circle([lat, long], {
            color: 'red',
            fillColor: '#1f6feb',
            fillOpacity: 0.5,
            radius: accuracy
        }).addTo(map);

        var marker = L.marker([lat, long]).addTo(map);
        marker.bindPopup("Your coordinate is: <br>" + lat + ' and <br>' + long).openPopup();
    }