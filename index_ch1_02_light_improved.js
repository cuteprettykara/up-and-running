// This is the default "main" file, specified from the root package.json file
// The ready function is excuted when the DOM is ready for usage.

var Light = require('./src/ch1_Light_It_Up/02_Light_Improved/light');
var ready = require('enyo/ready');
var Application = require('enyo/Application')

ready(function () {
	// Use case 1
	// var app = new Application({ name: 'app', view: { kind: 'Light', color: 'green'} });

	// Use case 2
	var app = new Application({ name: 'app', view: { kind: 'Light'} });

	window.setTimeout(function() {
		app.set('view.color', 'blue');
	}, 2000);
});