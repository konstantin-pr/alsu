/*======
*
* Eventchamp Scripts
*
======*/
(function($){
	'use strict';

	/*====== Admin Bar ======*/
	$(function(){
		var controlwpadminbar = $("#wpadminbar").is("div");
		if(controlwpadminbar == "") {
		} else {
			var controlwpadminbarh = $("#wpadminbar").height();

			var headerHeight = $(".mobile-header").height();
			$(".mobile-header").css('top',controlwpadminbarh + 'px');
			$("#wpadminbar").addClass('convertFixed');
		}
	});



	/*====== Loader ======*/
	setTimeout(function(){
		$('body').addClass('loaded');
	}, 2000);



	/*====== Go Top Scroll ======*/
	$(function () {
		$('.go-top-icon').on("click", function () {
			$('body,html').animate({
				scrollTop: 0
			}, 800);
			return false;
		});
	});



	/*====== Pretty Photo ======*/
	$(document).ready(function(){
		$("a[rel^='prettyPhoto']").prettyPhoto({ social_tools: false });
	});



	/*====== Date Picker ======*/
	$(document).ready(function(){
		jQuery('.eventsearchdate-datepicker').datepicker({ dateFormat: 'yy-mm-dd' });	 
	});



	/*====== CS Select ======*/
	$(document).ready(function() {
		(function() {
			[].slice.call( document.querySelectorAll( 'select.cs-select' ) ).forEach( function(el) {	
				new SelectFx(el);
			} );
		})();
	});



	/*====== Latest Events Slider ======*/
	$(function() {
	  $('.latest-events-slider a, .eventchamp-event-counter a, .header a[href*="#"]:not([href="#"])').click(function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
		  var target = $(this.hash);
		  target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
		  if (target.length) {
			$('html, body').animate({
			  scrollTop: target.offset().top
			}, 1000);
			return false;
		  }
		}
	  });
	});



	/*====== Tooltip ======*/
	$(function () {
		$('[data-toggle="tooltip"]').tooltip()
	});



	/*====== Mobile Header ======*/
	$(function () {
		$(document).on('click', '.mobile-header .mobile-menu-icon', function(){
			$('.mobile-header').addClass('mobile-menu-bars-actived');
			$('.mobile-header .mobile-menu-icon').addClass('mobile-menu-bars-opened');
			$('.mobile-header .mobile-menu-icon i').attr('class', 'far fa-times-circle');
			$('.mobile-menu').addClass('mobile-menu-opened');
			$('.mobile-menu-wrapper').addClass('mobile-menu-wrapper-opened');
		});

		$(document).on('click', '.mobile-header .mobile-menu-bars-opened', function(){
			$('.mobile-header .mobile-menu-icon').removeClass('mobile-menu-bars-opened');
			$('.mobile-header .mobile-menu-icon i').attr('class', 'fas fa-bars');
		});

		$(document).on('click', '.mobile-menu .mobile-menu-icon', function(){
			$('.mobile-menu').removeClass('mobile-menu-opened');
			$('.mobile-menu').removeClass('mobile-menu-wrapper-opened');
			$('.mobile-header').removeClass('mobile-menu-bars-actived');
			$('.mobile-menu-wrapper').removeClass('mobile-menu-wrapper-opened');
			$('.mobile-header .mobile-menu-icon').removeClass('mobile-menu-bars-opened');
			$('.mobile-header .mobile-menu-icon i').attr('class', 'fas fa-bars');
		});

		$(document).on('click', '.mobile-menu-wrapper-opened', function(){
			$('.mobile-menu').removeClass('mobile-menu-opened');
			$('.mobile-menu-wrapper').removeClass('mobile-menu-wrapper-opened');
			$('.mobile-header').removeClass('mobile-menu-bars-actived');
			$('.mobile-header .mobile-menu-icon').removeClass('mobile-menu-bars-opened');
			$('.mobile-header .mobile-menu-icon i').attr('class', 'fas fa-bars');
		});

		if($('.mobile-navbar li.dropdown .dropdown-menu').length){
			$('.mobile-navbar li.dropdown').append('<i class="fas fa-chevron-down"></i>');
			$('.mobile-navbar li.dropdown .fa-chevron-down').on('click', function() {
				$(this).prev('.dropdown-menu').slideToggle(500);
			});
		}

		$('.mobile-menu').scrollbar();

		$(document).on('click', '.user-box .user-box-login>ul>li.user-box-login-form .user-box-login-form-top-links li a', function(){
			$('.eventchamp-class').addClass('modal-open').delay(900);
		});

		$(document).on('click', '.user-box .user-box-login .close', function(){
			$('body').removeClass('modal-open');
		});
	});



	/*====== Global Swiper ======*/
	function gloriaSliders() {
		$('.gloria-sliders').each( function() {
			var cswiper = $(this),
				autoplay = $(this).data('aplay'),
				item = $(this).data('item'),
				sloop = $(this).data('sloop'),
				columnSpace = $(this).data('column-space'),
				effect = $(this).data('effect'),
				effectTime = $(this).data('effectTime'),
				pagination = $(this).data('pagination');

			var swiper = new Swiper(cswiper, {
				slidesPerView: item,
				autoplay: autoplay,
				loop: sloop,
				effect: effect,
				spaceBetween: columnSpace,
				nextButton: '.next',
				prevButton: '.prev',
				pagination: pagination,
				paginationClickable: true,
				preventClicks: true,
				preventClicksPropagation: true,
				breakpoints: {
					991: {
						slidesPerView: item < 6 ? item: 5, 
					},
					767: {
						slidesPerView: item < 6 ? item: 4, 
					},
					550: {
						slidesPerView: 1, 
					},
				}
			});

		});

	}
	gloriaSliders();



	/*====== Auto Height and Width for Sliders ======*/
	$(function(){
		$(window).resize(function(){
			var windowy = $(window).height();
			var windowx = $(window).width();
			$('.latest-events-slider .slider-wrapper').css('height',windowy + 'px');
			$('.event-counter-slider .bg-image').css('height',windowy + 'px');
			$('.eventchamp-event-counter').css('height',windowy + 'px');
			$('.slider-with-search-tool').css('height',windowy + 'px');
			$('.slider-with-search-tool .bg-image').css('height',windowy + 'px');
			$('.latest-events-slider .slider-wrapper').css('width',windowx + 'px');
			$('.event-counter-slider .bg-image').css('width',windowx + 'px');
			$('.eventchamp-event-counter').css('width',windowx + 'px');
			$('.slider-with-search-tool').css('width',windowx + 'px');
			$('.slider-with-search-tool .bg-image').css('width',windowx + 'px');
		}).resize();    
	});




	/*====== Number Counter ======*/
	$('.eventchamp-counter .number').counterUp({
		delay: 10,
		time: 2000
	});




	/*====== Plyr.js Setup ======*/
	$(function(){
		plyr.setup();
	});



	/*====== Tabs for Event Detail ======*/
	$('.event-detail-tabs .tab-content .tab-pane:first-child').addClass('active show');
	$('.event-detail-tabs .nav > li:first-child a').addClass('active');

	$('.eventchamp-dropdown .panel-group .panel:first-child .panel-collapse').addClass('in');
	$('.event-detail-tabs .tab-content #faq .panel-group .panel:first-child .panel-collapse').addClass('in');

	$('.contactLink').on('click', function(){
		$('.nav a[href="#contactform"]').click();
		$('html, body').animate({
			scrollTop: $("#contactform").offset().top
		}, 'slow');
	});

	$('.ticketLink').on('click', function(){
		$('.nav a[href="#tickets"]').click();
		$('html, body').animate({
			scrollTop: $("#tickets").offset().top
		}, 'slow');
	});



	/*====== FlexMenu Fixing ======*/
	$(document).on('click', 'li.flexMenu-viewMore', function(){
		$('li.flexMenu-viewMore li a.active').removeClass('active show');
		$(this).addClass('active show');
	});



	/*====== Categorized Events ======*/
	$('.categorized-events .tab-content .tab-pane:first-child').addClass('active show');
	$('.categorized-events .nav > li:first-child a').addClass('active');

} )( jQuery );