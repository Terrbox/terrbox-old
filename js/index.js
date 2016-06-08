
function heightSlide(){
	$(".slider").css("height", $(window).height()-80);
}

$( window ).load(function() {
	heightSlide();
});

$( window ).resize(function() {
	heightSlide();
});