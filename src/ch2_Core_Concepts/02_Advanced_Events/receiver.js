var Control = require('enyo/Control');
var Signals = require('enyo/Signals');

module.exprots = Control.kind({
    name: 'Receiver',
    components: [
        { name: 'display', content: 'Waiting...'},
        { kind: Signals, onButtonSignal: 'update' }
    ],
    update: function() {
        this.set('$.display.content', 'Got it!');
    }
});