// render a map

// later this will be through team
var barEndpoint = "/bars/56e73b39f8a139e04c05c9bf"

function getBarInfo () {
  $.getJSON(barEndpoint, function(data){
    console.log(data);
     barLat = data.bar[0].lat;
     barLong = data.bar[0].long;
    console.log("hey form getbarInfo");

    new google.maps.Marker({
      position: new google.maps.LatLng(barLat, barLong),
      map: map,
      // title: title
    });
  })
}

function createMap(){
  map = new google.maps.Map(document.getElementById('map'), {
    center: { lat: 37.78, lng: -122.44},
    zoom: 12
  });
}

getBarInfo();

createMap();