
$(document).on('ready', function() {
	// $(window).scrollTo('#page-more', 800);
	//get outerHeight of .nav-wrapper and store in a variable
	var offset = $('.nav-wrapper').outerHeight(true);
		console.log(offset);

		//add a margin-top to our body 
		$('body').css('margin-top', offset);

	$('.nav-main a').on('click', function(event) {
		console.log(event);
		event.preventDefault();
		//scroll to the page associate with this link
		// console.log(this);
		var pageToScrollTo = $(this).attr('href');
		console.log(pageToScrollTo);
		//use page to ScrollTo in a .scrollTo function
		$(window).scrollTo(pageToScrollTo, 1000, {offset: -offset});
	});
	$('.js-nav').on('click', function() {
		$('.nav-main').slideToggle();
	});
	//applying slidingshow
	// show first image by default
	$('.slideshow img').eq(0).show();
	var currentSlideNum = 0;
	var slideCount = $('.slideshow img').length;
	console.log('slideCount: ' + slideCount);


	var doSlides = function(direction){
		// hide the current slide
		var currentImage = $('.slideshow img');
		currentImage.eq(currentSlideNum).hide();
		console.log(currentImage.eq(currentSlideNum));

		if (direction === 'next'){
			// increase currentslide by 1;
			currentSlideNum = currentSlideNum + 1;
			
			// If currentSlideNum is the last slide
			if(currentSlideNum === slideCount){
				console.log('found the last slide, reset to 0');
				currentSlideNum = 0;
			}
		} else if (direction === 'prev'){
			// decrease curreslideNum by 1;
			currentSlideNum = currentSlideNum-1;
			// If currenSlideNum is the first slide
			if (currentSlideNum < 0){
				// update currentSlideNum to the last slide
				currentSlideNum = slideCount -1; // (length of array -1)	
			}
		}

		console.log('current slide: ' + currentSlideNum)
		
		// Update currentSlideNums BEFORE showing the next slide
		$('.slideshow img').eq(currentSlideNum).show();
	}

	// attach click event to next button
	$('.js-next').on('click', function(){
		doSlides('next');
	});

	$('.js-previous').on('click', function(){
		doSlides('prev');
	});

	// attach click event to js-play
	$('.js-play').on('click', function(){
		// create an interval
		autoPlay = setInterval(function(){
			doSlides('next');
		}, 1000);
	})

	// attach click event to js-pause
	$('.js-pause').on('click', function(){
		// clearInterval
		clearInterval(autoPlay);
	});
	
});//end of doc .ready



















