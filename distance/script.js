var map = L.map('map').setView([27.986065, 86.922623], 8);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

var pointArray = [];
var markerList = [];
var myLine = null;

map.on('click', function(e) {
    if (pointArray.length >=2) {
        alert("Only two points are allowed. To calculate other distance please reset the map.");
        return;
    }

    var current_loc = e.latlng;
    pointArray.push(current_loc);

    var name = "Point A";
    if (pointArray.length == 2) {
        name = "Point B";
    }

    var mkr = L.marker(current_loc).addTo(map)
    .bindPopup("<b>" + name + "</b><br>Latitude: " + current_loc.lat.toFixed(4) + "<br>Longitude: " + current_loc.lng.toFixed(4))
    .openPopup();

    markerList.push(mkr);

    if (pointArray.length ==2) {
        var pt1 = pointArray[0];
        var pt2 = pointArray[1];

        var distance = pt1.distanceTo(pt2);
        var outputText = "";

        if(distance > 1000) {
            outputText = (distance/1000).toFixed(2) + "km ";
        } 
        else {
            outputText = distance.toFixed(0) + "meters ";
        }

        myLine = L.polyline([pt1, pt2], {
            color: 'red',
            weight: 3,
            dashArray: '5. 5'
        }).addTo(map);

        map.fitBounds(myLine.getBounds());

        document.getElementById('info').innerHTML = "<b>Distance:</b> " + outputText;

        var midLat = (pt1.lat + pt2.lat)/2;
        var midlng = (pt1.lng + pt2.lng)/2;

        L.popup()
        .setLatLng([midLat, midLng])
        .setContent("<b>Distance: "+ outputText)
        .openOn(map);
    }
});

function resetMap() {
    if (myLine != null) {
        map.removeLayer(myLine);
    }

    for(var i=0; i<markerList.Length; i++) {
        map.removeLayer(markerList[i]);
    }

    pointArray = [];
    markerList = [];
    myLine = null;

    document.getElementById('info').innerHTML = "Click on any point of the map to select 2 points";
    map.closePopup();
}   