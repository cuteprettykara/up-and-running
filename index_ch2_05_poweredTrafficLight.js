// This is the default "main" file, specified from the root package.json file
// The ready function is excuted when the DOM is ready for usage.

var PoweredTrafficLight = require('./src/ch1_Light_It_Up/05_Powered_Traffic_Light/poweredTrafficLight');
var ready = require('enyo/ready');
var Application = require('enyo/Application')

ready(function () {
	new Application({ name: 'app', view: { kind: 'PoweredTrafficLight'} });
});