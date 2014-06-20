define([
	"jquery",
	"underscore",
	"backbone"
], function ($, _, Backbone) {

	"use strict"

	var OverlayView = Backbone.View.extend({

		initialize: function(opts) {
			this.parent 	= opts.parent;
			this.$overlay = this.$el;
			this.$arrow  	= $('#overlay-control');
			this.arrowUp 	= true;
		},

		show: function () {
			this.$overlay.addClass('float-up');
			this.$arrow.removeClass('arrow-up');
			this.arrowUp = false;			
		},

		hide: function () {
			this.$overlay.removeClass('float-up');
			this.$arrow.addClass('arrow-up');
			this.arrowUp = true;
		},

		toggleOverlay: function() {
			if (this.arrowUp) {
				this.show();
			} else {
				this.hide();
			}
		}

	})

	return OverlayView;

});