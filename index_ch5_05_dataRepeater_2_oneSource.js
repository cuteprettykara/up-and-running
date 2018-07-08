var ready = require('enyo/ready');
var Application = require('enyo/Application');
var kind = require('enyo/kind');
var DataRepeater = require('enyo/DataRepeater');
var Model = require('enyo/Model');
var Collection = require('enyo/Collection');

ready(function() {
    kind({
        name: 'RestaurantRepeater',
        kind: DataRepeater,
        components: [{ kind: 'RestaurantView' }]
    });

    kind({
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

    var RestaurantCollection = kind({
        name: 'RestaurantCollection',
        kind: Collection,
        model: 'RestaurantModel'
    });
    
    kind({
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

    kind({
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
    
    new Application({ name: 'app', view: { kind: 'MainView' } });
});