// This is the default "main" file, specified from the root package.json file
// The ready function is excuted when the DOM is ready for usage.

var MainView = require('./src/ch5_Data_Driven_Applications/01_Models/mainView');
var ready = require('enyo/ready');
var Application = require('enyo/Application')

ready(function () {
	new Application({ name: 'app', view: {kind: 'MainView'} });
});