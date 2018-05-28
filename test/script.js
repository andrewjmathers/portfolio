
	var leftOut = 0;

	var currentSlide = 0;

	var boxes = document.getElementsByClassName("box");

	function chooseNext(){



		currentSlide++;

		var nextOne = currentSlide;

		var middle = currentSlide + 1;

		var third = currentSlide + 2;

 	if( !boxes[third]  ){

 		console.log("doesn't exist");

 		currentSlide = 0;

 		$(".box").css({"transform":"rotateY(0deg)"});

		$("#one").css({"transform":"rotateY(40deg)"});
		$("#three").css({"transform":"rotateY(-40deg)"});

 		leftOut = 0;

 		$("#uList").animate({"left": -leftOut+"px"}, 2000);

 	}

		$('.box:eq('+nextOne+')').css({"transform":"rotateY(40deg)"});

		$('.box:eq('+middle+')').css({"transform":"rotateY(0deg)"});

		$('.box:eq('+third+')').css({"transform":"rotateY(-40deg)"});

	}
	
	
	function scrollBack(){

		leftOut += 250;

		$("#uList").animate({"left": -leftOut+"px"}, 2000);

		chooseNext();
}




	setInterval(scrollBack, 5000);

	$("#one").css({"transform":"rotateY(40deg)"});
	$("#three").css({"transform":"rotateY(-40deg)"});