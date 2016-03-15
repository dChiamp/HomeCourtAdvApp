// render a map

// later this will be through team
var barEndpoint = "/bars"

function getBarInfo () {
  $.getJSON(barEndpoint, function(bars){
    bars = bars;
    // get all objects in bar db
    for (var bar in bars) {
      // get each bar lat/long
      for (i=0; i < bars[bar].length; i++) {
      console.log(bars[bar][i].lat)
      barLat = bars[bar][i].lat;
      barLong = bars[bar][i].long;
      console.log(barLat);
      // barCity = bars.bar[0].city;

      // render each bar as pin on map
        new google.maps.Marker({
          position: new google.maps.LatLng(barLat, barLong),
          map: map,
        });
      }
    }
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