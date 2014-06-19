define([
	"jquery",
	"underscore",
	"backbone",
	"app/views/overlay"
], function ($, _, Backbone, OverlayView) {

	"use strict"
	
	var PageView = Backbone.View.extend({

		initialize: function() {
			console.log('initialzied page view');
		},

		events: {
			'click #overlay-control': function (e) {

				if (!this.ov) {
					this.ov = new OverlayView({el: $('div.overlay'), parent: this});
				}
				
				this.ov.toggleOverlay();
			}
		}

	});

	return PageView;

});