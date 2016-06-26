$(".down").click(function(){

	$("div").removeClass("page--current");
	$(".page2").addClass("page--current").animate({
		top: "0px",
	}, 1000);

	$(".page3").css("left", "-100%");


});

$(".left").click(function(){
	$("div").removeClass("page--current");
	$(".page3").addClass("page--current").animate({
		left: "0px",
	}, 1000);

	$(".page2").css("top", "100vh");
})

$(".right").click(function(){
	alert("clicked right");
})