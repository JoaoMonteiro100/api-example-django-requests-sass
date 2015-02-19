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

function howLongAgo(somedate) {
	var today, onehour, oneday, difference, text;
	today = new Date();
	onehour = 1000*60*60; /* miliseconds in 1 hour */
	oneday = 1000*60*60*24; /* miliseconds in 1 day */
	
	if (today - somedate < onehour) {
		difference = (today - somedate)%1000%60; /* in minutes */
	    text = "Adicionado há " + difference + " minutos.";
	} else if (today - somedate < oneday) {
		difference = (today - somedate)%1000%60%60; /* in hours */
	    text = "Adicionado há " + difference + " horas.";
	} else {
		difference = (today - somedate)%1000%60%60%24; /* in days */
	    text = "Adicionado há " + difference + " dias.";
	}
	/* document.getElementById("date").innerHTML = text; */
};

document.getElementById("date").innerHTML = howLongAgo(1422456727000);

$(function() {

    var newHash      = "",
        $mainContent = $("#contents"),
        $pageWrap    = $("#legal-area"),
        baseHeight   = 0,
        $el;
        
    $pageWrap.height($pageWrap.height());
    baseHeight = $pageWrap.height() - $mainContent.height();
    /*
    $("nav").delegate("a", "click", function() {
        window.location.hash = $(this).attr("href");
        return false;
    });
    
    $(window).bind('hashchange', function(){
    */
        newHash = window.location.hash.substring(1);
        
        if (newHash) {
            $mainContent
                .find("#legal-area")
                .fadeOut(200, function() {
                    $mainContent.hide().load(newHash + " #legal-area", function() {
                        $mainContent.fadeIn(200, function() {
                            $pageWrap.animate({
                                height: baseHeight + $mainContent.height() + "px"
                            });
                        });
                        /*$("nav a").removeClass("current");
                        $("nav a[href='"+newHash+"']").addClass("current");*/
                    });
                });
        };
        
    });
    
    $(window).trigger('hashchange');

});