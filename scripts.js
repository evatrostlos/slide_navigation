$(".down").click(function(){
	$(".page2").addClass("page--current").animate({
		top: "0px",
	}, 1000);
	$(".page1").removeClass("page--current");
});

$(".left").click(function(){
	alert("clicked left");
})

$(".right").click(function(){
	alert("clicked right");
})