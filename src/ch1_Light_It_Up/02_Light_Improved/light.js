var Control = require('enyo/Control');

module.exports = Control.kind({
	name: "Light",
	color: "yellow",
	style: "width: 50px; height: 50px; border-radius: 50%",
	create: function () {
		this.inherited(arguments);
		this.colorChanged();
	},
	colorChanged: function (oldValue) {
		this.applyStyle('background-color', this.color);
	}
});