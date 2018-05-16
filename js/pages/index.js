$(function() {

	// Initialize viewer.js
	var viewer = new Viewer(document.getElementById('gallery'), {
		toolbar:
		{
			prev: true,
			next: true
		},
		navbar: false,
		tooltip: false,
		zoomRatio: 0.25,
		minZoomRatio: 0.1,
		maxZoomRatio: 2
	});


	// Show a magnifying glass icon on gallery image hover using Slickhover
	$(".gallery-column img").slickhover({
		icon: "images/magnifying-glass-icon.png",
		animateIn: false
	});


	// Initialize lazyload
	var myLazyLoad = new LazyLoad();

});