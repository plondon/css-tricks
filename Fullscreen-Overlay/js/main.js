require.config({
	waitSeconds: 0,
	paths: {
		"underscore": "../js/lib/underscore",
		"backbone": "../js/lib/backbone",
		"jquery": "../js/lib/jquery",
		"backstretch": "../js/lib/backstretch"
	},
	shim: {
	  underscore: {
	    exports: "_"
	  },
	  backbone: {
	    deps: ["jquery", "underscore"],
	    exports: "Backbone"
	  },
	  velocity: {
	    deps: ["jquery"]
	  },
	  "lazy-load": {
	    deps: ["jquery"]
	  },
	  "backstretch": {
	  	deps: ["jquery"]
	  }
	},
  urlArgs: "bust=" + (new Date()).getTime()	
})

require([ 
	"underscore",
	"backbone",
	"jquery",
	"backstretch"
], function (_, Backbone, $, backstretch) {

	require(['app/pages/home']);

});