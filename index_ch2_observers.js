// This is the default "main" file, specified from the root package.json file
// The ready function is excuted when the DOM is ready for usage.

var MyKind = require('./src/ch2_Core_Concepts/00_Bindings_and_Observers/myKind');
var ready = require('enyo/ready');
var Application = require('enyo/Application')

ready(function () {
	var app = new Application({
		name: 'app', 
		view: { kind: 'MyKind'}
	});

	window.setTimeout(function() {
		app.set('view.myValue', 5);
	}, 2000);
});