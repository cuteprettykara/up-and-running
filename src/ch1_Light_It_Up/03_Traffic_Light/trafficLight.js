var kind = require('enyo/kind');
var Light = require('../02_Light_Improved/light');

module.exports = kind({
	name: 'TrafficLight',
	components: [
		{ name: 'stop', kind: 'Light', color: 'red' },
		{ name: 'slow', kind: 'Light', color: 'yellow' },
		{ name: 'go', kind: 'Light', color: 'green' }
	],
});