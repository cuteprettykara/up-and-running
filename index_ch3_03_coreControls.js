// This is the default "main" file, specified from the root package.json file
// The ready function is excuted when the DOM is ready for usage.

var CoreControls = require('./src/ch3_Components_Controls_and_Other_Objects/02_Controls/coreControls');
var ready = require('enyo/ready');
var Application = require('enyo/Application')

ready(function () {
	var app = new Application({
		name: 'app', 
		view: { kind: 'CoreControls'}
	});
});