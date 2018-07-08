// This is the default "main" file, specified from the root package.json file
// The ready function is excuted when the DOM is ready for usage.

var Subscriber = require('./src/ch2_Core_Concepts/01_Events/subscriber');
var ready = require('enyo/ready');
var Application = require('enyo/Application')

ready(function () {
	new Application({ name: 'app', view: { kind: 'Subscriber'} });
});