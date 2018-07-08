// This is the default "main" file, specified from the root package.json file
// The ready function is excuted when the DOM is ready for usage.

var Repeater = require('./src/ch4_Layout/01_Core Layout/repeater');
var ready = require('enyo/ready');
var Application = require('enyo/Application')

ready(function () {
	var app = new Application({
		name: 'app', 
		view: { kind: 'Repeater'}
	});
});