$(window).load(function() {
	var path = 'images/404/',
    imgs = ['patrick.gif','fallingpanda.gif','meanpenguin.gif',
    'shoppingcart.gif'],
    i = Math.floor(Math.random()*imgs.length);
	// $('.el').append("<img src='"+path+imgs[i]+"'>").hide().fadeIn(2000);
	$('body').css('background',
		"linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url("+path+imgs[i]+")");
});