var kind = require('enyo/kind');
var Collection = require('enyo/Collection');
var RestaurantModel = require('../03_Computed_Properties/restaurantModel');

module.exports = kind({
    name: 'RestaurantCollection',
    kind: Collection,
    model: RestaurantModel
});