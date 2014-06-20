define([
	"jquery",
	"app/views/page",
	"app/views/overlay",
	"lib/backstretch"
], function ($, PageView, OverlayView) {

	$(document).ready(function() {

		window.pv = new PageView({
			el: $('body')
		});		
	
	});

	$.backstretch('images/home.jpg');

});