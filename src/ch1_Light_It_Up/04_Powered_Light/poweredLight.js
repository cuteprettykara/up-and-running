var kind = require('enyo/kind');
var Light = require('../02_Light_Improved/light');

module.exports = kind({
	name: 'PoweredLight',
	kind: 'Light',
	powered: true,
	handlers: {
		'ontap': 'tapped'
	},
	create: function () {
		this.inherited(arguments);
		this.poweredChanged();
	},
	tapped: function (sender, event) {
		this.set('powered', !this.get('powered'));
	},
	poweredChanged: function (oldValue) {
		this.applyStyle('opacity', this.powered ? '1' : '0.2');
	}
});