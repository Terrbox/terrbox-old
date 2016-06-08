
function heightSlide(){
	$(".slider").css("height", $(window).height()-81);
}

$( window ).load(function() {
	heightSlide();

});
