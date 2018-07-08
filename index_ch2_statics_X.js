// This is the default "main" file, specified from the root package.json file
// The ready function is excuted when the DOM is ready for usage.

var InstanceCounterView = require('./src/ch2_Core_Concepts/03_Statics/instanceCounterView');
var ready = require('enyo/ready');
var Application = require('enyo/Application')

ready(function () {
	var app = new Application({
		name: 'app', 
		view: { kind: 'InstanceCounterView'}
	});
});