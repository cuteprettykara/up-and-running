var kind = require('enyo/kind');
var PoweredLight = require('./poweredLight');
var logger = require('enyo/Logger');

module.exports = kind({
	name: 'PoweredTrafficLight',
	handlers: {
		'onStateChanged': 'logStateChanged'
	},
	components: [
		{ name: 'stop', kind: 'PoweredLight', color: 'red' },
		{ name: 'slow', kind: 'PoweredLight', color: 'yellow' },
		{ name: 'go', kind: 'PoweredLight', color: 'green' }
	],
	logStateChanged: function(sender, event) {
		logger.log(sender.name + ' powered ' + (event.powered ? 'on' : 'off')
                + ' at ' + new Date());
	}
});