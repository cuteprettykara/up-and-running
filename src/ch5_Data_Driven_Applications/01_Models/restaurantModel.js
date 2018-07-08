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
    nameChanged: function(was, is) {
        if(is) {
            this.changeCount = this.changeCount ?  ++this.changeCount : 1;
            // if (this.changeCount) {
            //     this.changeCount++;
            // } else {
            //     this.changeCount = 1;
            // }
        }
    }
});