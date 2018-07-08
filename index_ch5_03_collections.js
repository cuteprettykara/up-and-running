// This is the default "main" file, specified from the root package.json file
// The ready function is excuted when the DOM is ready for usage.

var ready = require('enyo/ready');
var Collection = require('enyo/Collection');

ready(function () {
	var fruits = new Collection([
		{ name: 'apple' },
		{ name: 'cherry' },
		{ name: 'banana' }
	]);

	console.log(fruits.at(0).get('name')); 				// returns "apple"

	fruits.add({ name: 'rambutan' });
	console.log(fruits.at(fruits.length-1).get('name')); // returns "rambutan"

});