/*
 * Navbar related functions
 */
var Navbar = {};
Navbar.active = true;
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

/*
 * Function to determine how long ago a publication was published
 */
function howLongAgo(some_date) {
	var today, twohours, twodays, difference, text;
	today = new Date();
	pub_date = new Date(some_date);
	twominutes = 1000*60*2; /* milliseconds in 2 minutes */
	twohours = 1000*60*60*2; /* milliseconds in 2 hours */
	twodays = 1000*60*60*24*2; /* milliseconds in 2 days */
	
	/* if it was less than 2 minutes ago */
	if (today - pub_date < twominutes) {
	    text = "Adicionado agora mesmo.";
	}
	/* if it was less than 2 hours ago */
	else if (today - pub_date < twohours) {
		difference = Math.floor((today - pub_date) / (1000*60)); /* in minutes */
	    text = "Adicionado há " + difference + " minutos.";
	}
	/* if it was less than 2 days ago */
	else if (today - pub_date < twodays) {
		difference = Math.floor((today - pub_date) / (1000*60*60)); /* in hours */
	    text = "Adicionado há " + difference + " horas.";
	}
	/* if it was over 2 days ago */
	else {
		difference = Math.floor((today - pub_date) / (1000*60*60*24)); /* in days */
	    text = "Adicionado há " + difference + " dias.";
	}
	return text;
};