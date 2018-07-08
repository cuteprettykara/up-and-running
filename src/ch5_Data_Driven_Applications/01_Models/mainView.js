var Control = require('enyo/Control');
var RestaurantView = require('./restaurantView');
var RestaurantModel = require('./restaurantModel');

module.exports = Control.kind({
    name: 'MainView',
    components: [{ name: 'restaurant', kind: 'RestaurantView' }],
    bindings: [
        { from: 'model', to: '$.restaurant.model' }
    ],
    create: function() {
        this.inherited(arguments);
        this.set('model', new RestaurantModel({
            name: 'Kara',
            cuisine: 'Japanese',
            specialty: 'ramen'
        }));
    }
});