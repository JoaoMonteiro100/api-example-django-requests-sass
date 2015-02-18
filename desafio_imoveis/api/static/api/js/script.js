var map;
function initialize() {
  var mapOptions = {
    zoom: 16,
    center: new google.maps.LatLng(38.87173918814673, -9.079158804507415)
  };
  map = new google.maps.Map(document.getElementById('map-canvas'),
      mapOptions);
}

google.maps.event.addDomListener(window, 'load', initialize);