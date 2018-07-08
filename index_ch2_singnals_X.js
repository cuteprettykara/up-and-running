// This is the default "main" file, specified from the root package.json file
// The ready function is excuted when the DOM is ready for usage.

var Signaller = require('./src/ch2_Core_Concepts/02_Advanced_Events/signaller');
var Receiver = require('./src/ch2_Core_Concepts/02_Advanced_Events/receiver');
var ready = require('enyo/ready');
var Application = require('enyo/Application')

ready(function () {
	var app = new Application({
		name: 'app', 
		view: { 
			components: [
				{kind: 'Signaller'},
				{kind: 'Receiver'}
			]
		} 
	});
});