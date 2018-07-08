var kind = require('enyo/kind');
var bind = require('enyo/Binding')

module.exports = kind({
	name: "Heartbeat",
	events: {
		'onBeat': ''
	},
	create: function () {
		this.inherited(arguments);
        // this.timer = window.setInterval(enyo.bind(this, 'beat'), 1000);
        this.timer = window.setInterval(this.bindSafely("beat"), 1000);
    },
    destroy: function() {
        if(this.timer !== undefined) {
            window.clearInterval(this.timer);
        }
        this.inherited(arguments);
    },
    beat: function() {
        this.doBeat({});
    }
});