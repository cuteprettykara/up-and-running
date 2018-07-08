// This is the default "main" file, specified from the root package.json file
// The ready function is excuted when the DOM is ready for usage.

var List = require('./src/ch4_Layout/02_Layout_Library/02_List/list');
var ready = require('enyo/ready');
var Application = require('enyo/Application')

ready(function () {
	var app = new Application({
		name: 'app', 
		view: { kind: 'List'}
	});
});