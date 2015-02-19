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

var Navbar = {};

Navbar.active = false;

Navbar.open = function(el) {
  var navbar = $(el).closest('.navbar')
  ,   item = $(el).closest('.navbar-item')
  ,   menu = item.find('.menu').first()
  ;
  Navbar.active = true;
  item.addClass('is-selected')
  item.siblings().removeClass('is-selected');
};

Navbar.close = function() {
  $('.navbar-item.is-selected').removeClass('is-selected');
  Navbar.active = false;
};

$('.navbar-item').on('click', function(e) {
  if (!Navbar.active) {
    Navbar.open(this);
    e.stopPropagation(); // Keep document.click from firing
  }
});

$('.navbar-item').on('mouseenter', function() {
  if (Navbar.active) { Navbar.open(this); }
});

$(document).on('click', function() {
  Navbar.close();
});