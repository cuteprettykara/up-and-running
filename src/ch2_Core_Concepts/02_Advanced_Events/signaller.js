var Control = require('enyo/Control');
var Signals = require('enyo/Signals');
var Button = require('enyo/Button')

module.exprots = Control.kind({
    name: 'Signaller',
    components: [
        { kind: Button, content: 'Click', ontap: 'sendit' }
    ],
    sendit: function() {
        Signals.send('onButtonSignal');
    }
});