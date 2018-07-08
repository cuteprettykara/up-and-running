var kind = require('enyo/kind');
var DataRepeater = require('enyo/DataRepeater');
var RestaurantView = require('../01_Models/restaurantView');

module.exports = kind({
    name: 'RestaurantRepeater',
    kind: DataRepeater,
    components: [{ kind: 'RestaurantView' }]
});