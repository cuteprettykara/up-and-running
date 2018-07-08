var kind = require('enyo/kind');
var RestaurantRepeater = require('./restaurantRepeater');
var RestaurantCollection = require('../02_Collections/restaurantCollection');

module.exports = kind({
    name: 'MainView',
    components: [{ name: 'list', kind: 'RestaurantRepeater' }],
    bindings: [
        { from: 'collection', to: '$.list.collection' }
    ],
    create: function() {
        this.inherited(arguments);
        this.set('collection', new RestaurantCollection([
            {
                name: 'Orenchi',
                cuisine: 'Japanese',
                specialty: 'ramen',
                rating: 4
            }, {
                name: 'The Inn at Little Washington',
                cuisine: 'New American',
                rating: 5
            }, {
                name: 'The French Laundry',
                cuisine: 'French',
                rating: 5
            }
        ]));
    }
});