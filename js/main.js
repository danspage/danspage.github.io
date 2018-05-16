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




// Email form overlay

// Get the modal
var modal = document.getElementById('myModal');
// Get the button that opens the modal
var btn = document.getElementById("contact-link");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
// When the user clicks on the button, open the modal
btn.onclick = function() {
	$("#header").fadeOut(200);
	$("#myModal").slideDown();
}
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
	$("#myModal").slideUp();
	$("#header").fadeIn(200);
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
	if (event.target == modal) {
		$("#myModal").slideUp(function() {
			$("#header").fadeIn(200);
		});
	}
}
