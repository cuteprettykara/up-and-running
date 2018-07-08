// This is the default "main" file, specified from the root package.json file
// The ready function is excuted when the DOM is ready for usage.

var ready = require('enyo/ready');
var MainView = require('./src/ch5_Data_Driven_Applications/04_Data_Aware_Components/mainView')
var Application = require('enyo/Application')

ready(function () {
	var app = new Application({ name: 'app', view: {kind: 'MainView'} });
});