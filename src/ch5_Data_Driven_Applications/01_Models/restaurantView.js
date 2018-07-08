var kind = require('enyo/kind');

module.exports = kind({
    name: 'RestaurantView',
    components: [
        { name: 'name' },
        { name: 'cuisine' },
        { name: 'specialty' },
        { name: 'rating' }
    ],
    bindings: [
        { from: 'model.name', to: '$.name.content' },
        { from: 'model.cuisine', to: '$.cuisine.content' },
        { from: 'model.specialty', to: '$.specialty.content' },
        { from: 'model.rating', to: '$.rating.content' }
    ]
});