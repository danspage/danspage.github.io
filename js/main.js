/**
* ===================================================================
* Main js
*
* -------------------------------------------------------------------
*/

(function($) {

	"use strict";

	/* --------------------------------------------------- */
	/* Preloader
	------------------------------------------------------ */
	$(document).ready(function() {

		$("#contact-link").mouseenter(function() {
			$(this).html("[contact <i class=\"fa fa-paper-plane\" style=\"font-size:85%\"></i>]");
		}).mouseleave(function() {
			$(this).html("[contact]");
		});



		$("body").on("contextmenu", "img", function(e) {
			return false;
		});

		// Fade out the loading animation first
		$("#loader").fadeOut("slow", function(){
			// Fade out the black screen that covers the website
			$("#preloader").delay(300).fadeOut("slow");
		});

	});


	/*---------------------------------------------------- */
	/* FitVids
	------------------------------------------------------ */
	$(".fluid-video-wrapper").fitVids();


	/* --------------------------------------------------- */
	/*  Particle JS
	------------------------------------------------------ */
	$('.home-particles').particleground({
		dotColor: '#fff',
		lineColor: '#555555',
		particleRadius: 6,
		curveLines: true,
		density: 10000,
		proximity: 110
	});


	/*-----------------------------------------------------*/
	/* tabs
	-------------------------------------------------------*/
	$(".tab-content").hide();
	$(".tab-content").first().show();

	$("ul.tabs li").click(function () {
		$("ul.tabs li").removeClass("active");
		$(this).addClass("active");
		$(".tab-content").hide();
		var activeTab = $(this).attr("data-id");
		$("#" + activeTab).fadeIn(700);
	});


	/*----------------------------------------------------*/
	/* Smooth Scrolling
	------------------------------------------------------*/
	$('.smoothscroll').on('click', function (e) {

		e.preventDefault();

		var target = this.hash,
		$target = $(target);

		$('html, body').stop().animate({
			'scrollTop': $target.offset().top
		}, 800, 'swing', function () {
			window.location.hash = target;
		});

	});


	/* --------------------------------------------------- */
	/*  Placeholder Plugin Settings
	------------------------------------------------------ */
	$('input, textarea, select').placeholder();


	/*----------------------------------------------------*/
	/* Final Countdown Settings
	------------------------------------------------------ */
	var finalDate = '2018/01/01';

	$('div#counter').countdown(finalDate)
	.on('update.countdown', function(event) {

		$(this).html(event.strftime('<div class=\"half\">' +
		'<span>%D <sup>days</sup></span>' +
		'<span>%H <sup>hours</sup></span>' +
		'</div>' +
		'<div class=\"half\">' +
		'<span>%M <sup>mins</sup></span>' +
		'<span>%S <sup>secs</sup></span>' +
		'</div>'));

	});


})(jQuery);
