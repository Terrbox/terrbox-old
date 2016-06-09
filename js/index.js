
function heightSlide(){
	$(".slider").css("height", $(window).height()-$("header").height());
	$(".slider").css("margin-top", $("header").height());
}

$( window ).load(function() {
	$(".button-collapse").sideNav();
	$("#atech").click(function() {
	    $('html, body').animate({
	        scrollTop: $("#tech").offset().top-100
	    }, 1000);
	});
	$("#aother").click(function() {
	    $('html, body').animate({
	        scrollTop: $("#other").offset().top-100
	    }, 1000);
	});
	$("#acontact").click(function() {
	    $('html, body').animate({
	        scrollTop: $("#contact").offset().top-100
	    }, 1000);
	});
	$(".arepo").click(function() {
	    $('html, body').animate({
	        scrollTop: $("#repo").offset().top-100
	    }, 1000);
	});

	heightSlide();
});

$( window ).resize(function() {
	heightSlide();
});