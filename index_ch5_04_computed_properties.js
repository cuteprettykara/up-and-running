// This is the default "main" file, specified from the root package.json file
// The ready function is excuted when the DOM is ready for usage.

var ready = require('enyo/ready');
var RestaurantModel = require('./src/ch5_Data_Driven_Applications/03_Computed_Properties/restaurantModel');
var Application = require('enyo/Application')

ready(function () {
	var rest = new RestaurantModel({
		name: 'The French Laundry',
		rating: 5
	});

	console.log(rest.get('starRating'));
});