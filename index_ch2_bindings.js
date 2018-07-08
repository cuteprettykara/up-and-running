// This is the default "main" file, specified from the root package.json file
// The ready function is excuted when the DOM is ready for usage.

var ShadowKind = require('./src/ch2_Core_Concepts/00_Bindings_and_Observers/shadowKind');
var ready = require('enyo/ready');
var Application = require('enyo/Application')

ready(function () {
	var app = new Application({
		name: 'app', 
		view: { kind: 'ShadowKind'}
	});

	window.setTimeout(function() {
		app.set('view.original', 'changed');
	}, 2000);
});