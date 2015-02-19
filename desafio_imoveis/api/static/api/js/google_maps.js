var map;
function initialize() {
  var mapOptions = {
    zoom: 7,
    center: new google.maps.LatLng(39.9257158, -7.8089654),
	disableDefaultUI: true
  };
  map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
	  
   var iconBase = 'http://i.imgur.com/V9NJ1UD.png';
   var marker = new google.maps.Marker({
      position: new google.maps.LatLng(38.87173918814673, -9.079158804507415),
      map: map,
      title:"Urbanização Quinta de Dona Cândida",
	  icon: iconBase
  });
  
  var marker = new google.maps.Marker({
      position: new google.maps.LatLng(38.7341340993864, -9.11604791879654),
      map: map,
      title:"Rua Faustino José Rodrigues",
	  icon: iconBase
  });
}


google.maps.event.addDomListener(window, 'load', initialize);