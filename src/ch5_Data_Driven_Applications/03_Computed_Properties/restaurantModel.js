var kind = require('enyo/kind');
var Model = require('enyo/Model');

module.exports = kind({
    name: 'RestaurantModel',
    kind: Model,
    attributes: {
        name: 'unknown',
        cuisine: 'unknown',
        specialty: 'unknown',
        rating: 0
    },
    computed: [
        { method: 'starRating', path: 'rating' }
    ],
    starRating: function() {
        var rating = this.get('rating');
        return rating + ' star' + ((rating == 1) ? '' : 's');
    }
});