
	console.log("initiated");

	var current = 0;

	var value = 0;

	var rotate = $("#anchor").css({

				"transform":"rotate()"

			});

	const sites = [ 

		{ name: "retro", url: "https://andrewjmathers.github.io/retro", img: "retro.png" }, 
		{ name: "acropyga", url: "https://andrewjmathers.github.io/acropyga", img: "acro.png", desciption: "" }

		];

	function iconClick(e){

		if( e.target.classList.contains("icSecond") ){

			return;
		}

		var event = e;

		function sendCallback(e){

			scrollAnchor(event);
		}

		$("#icons").fadeOut(400, sendCallback);

		function bringBack(){

			console.log("fired");
			$("#icons").fadeIn(800);

		}

		setTimeout( bringBack, 1600)

	}


	function scrollAnchor(e){

		if( e.target.classList.contains( 'icFirst' ) ){

			sites[current-1] ? current-- : current = sites.length-1;

			value -= 90;

			$("#anchor").css({

				"transform":"translateX(-50%) translateY(40%) rotate("+value+"deg)"

			});

		} else if( e.target.classList.contains( 'icThird' ) ){

			sites[current+1] ? current++ : current = 0;

			value += 90;

			$("#anchor").css(

				"transform", "translateX(-50%) translateY(40%) rotate("+value+"deg)"

			);

		}
	
		assignIcons();

	}
	

	function assignIcons(){

		$("#bg").fadeOut(400, changeBg);

		function changeBg(){		

			$("#bg").css({

						"background-image":"url("+sites[current].img+")"

					});

			$("#bg").fadeIn(400);
		}

		$(".icSecond").css({

							"background-image": 'url('+sites[current].img+')'
									
						});


		if( !sites[current-1] ){

			$(".icFirst").css({

								"background-image": 'url('+sites[sites.length-1].img+')'

							});

		}else{

			$(".icFirst").css({

								"background-image": 'url('+sites[current-1].img+')'

							});

		}

		if( !sites[current+1] ){

			$(".icThird").css({

								"background-image": 'url('+sites[0].img+')'

							});

		}else{

			$(".icThird").css({

								"background-image": 'url('+sites[current+1].img+')'

							});


		}

		$("#cover").css({

								"background-image": 'url('+sites[current].img+')'

							});
	}
			
		







































		//done on loadup

		$(".icSecond").css({

							"background-image": 'url('+sites[current].img+')'
									
						});


		if( !sites[current-1] ){

			$(".icFirst").css({

								"background-image": 'url('+sites[sites.length-1].img+')'

							});

		}else{

			$(".icFirst").css({

								"background-image": 'url('+sites[current-1].img+')'

							});

		}

		if( !sites[current+1] ){

			$(".icThird").css({

								"background-image": 'url('+sites[0].img+')'

							});

		}else{

			$(".icThird").css({

								"background-image": 'url('+sites[current+1].img+')'

							});

		}

		$("#cover").css({

								"background-image": 'url('+sites[current].img+')'

							});



	$('.icon').on("click", iconClick);