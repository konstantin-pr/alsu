(function($){
	'use strict';
	
	$(window).scroll(function(){
		if ($(window).scrollTop() >= 300) {
			$('.header-style-1').addClass('fixed-header-class');
			$('.mobile-header').addClass('fixed-header-class');
		}
		else {
			$('.header-style-1').removeClass('fixed-header-class');
			$('.mobile-header').removeClass('fixed-header-class');
		}
	});

	var headerStyle1Control = $(".header-style-1.header-style-2").is("div");
	if(headerStyle1Control == "") {
		$(window).scroll(function(){
			if ($(window).scrollTop() >= 300) {
				$('.eventchamp-wrapper').addClass('fixed-header-class');
			}
			else {
				$('.eventchamp-wrapper').removeClass('fixed-header-class');
			}
		});
	} else {
	}

	if ($(window).width() < 1000) {
		$(window).scroll(function(){
			if ($(window).scrollTop() >= 300) {
				$('.eventchamp-wrapper').addClass('fixed-header-class');
			}
			else {
				$('.eventchamp-wrapper').removeClass('fixed-header-class');
			}
		});		
	}

} )( jQuery );