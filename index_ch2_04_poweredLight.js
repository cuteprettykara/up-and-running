// This is the default "main" file, specified from the root package.json file
// The ready function is excuted when the DOM is ready for usage.

var PoweredLight = require('./src/ch1_Light_It_Up/04_Powered_Light/poweredLight');
var ready = require('enyo/ready');
var Application = require('enyo/Application')

ready(function () {
	new Application({ name: 'app', view: { kind: 'PoweredLight'} });
});