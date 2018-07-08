// This is the default "main" file, specified from the root package.json file
// The ready function is excuted when the DOM is ready for usage.

var RestaurantModel = require('./src/ch5_Data_Driven_Applications/01_Models/restaurantModel');
var ready = require('enyo/ready');
var Application = require('enyo/Application')

ready(function () {
	// var mcd = new RestaurantModel({ name: 'McDonalds' });
	// console.log(mcd.get('specialty'));

	var rest = new RestaurantModel({name: 'Izakaya Seki'});
	rest.set('name','Inn at Little Washington');
	console.log(rest.changeCount);
	console.dir(rest);

	rest.set('name','Seoul Bar');
	console.log(rest.changeCount);
	console.dir(rest);
});