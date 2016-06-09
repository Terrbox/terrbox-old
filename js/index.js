
function heightSlide(){
	$(".slider").css("height", $(window).height()-$("header").height());
	$(".slider").css("margin-top", $("header").height());
}

$( window ).load(function() {
	$(".button-collapse").sideNav();
	$(".atech").click(function() {
	    $('html, body').animate({
	        scrollTop: $("#tech").offset().top-120
	    }, 1000);
	    $('.button-collapse').sideNav('hide');
	});
	$(".aother").click(function() {
	    $('html, body').animate({
	        scrollTop: $("#other").offset().top-120
	    }, 1000);
	    $('.button-collapse').sideNav('hide');
	});
	$(".acontact").click(function() {
	    $('html, body').animate({
	        scrollTop: $("#contact").offset().top-120
	    }, 1000);
	    $('.button-collapse').sideNav('hide');
	});
	$(".arepo").click(function() {
	    $('html, body').animate({
	        scrollTop: $("#repo").offset().top-120
	    }, 1000);
	    $('.button-collapse').sideNav('hide');
	});

	heightSlide();
});

$( window ).resize(function() {
	heightSlide();
});