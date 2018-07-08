var kind = require('enyo/kind');
var PoweredLight = require('../04_Powered_Light/poweredLight');

module.exports = kind({
	name: 'PoweredTrafficLight',
	components: [
		{ name: 'stop', kind: 'PoweredLight', color: 'red' },
		{ name: 'slow', kind: 'PoweredLight', color: 'yellow' },
		{ name: 'go', kind: 'PoweredLight', color: 'green' }
	],
});