var Control = require('enyo/Control');
var Heartbeat = require('./heartbeat');
var TextArea = require('enyo/TextArea');

module.exprots = Control.kind({
    name: 'HeartbeatView',
    components: [
        {kind: 'Heartbeat', onBeat: 'beat'},
        {name: 'text', kind: TextArea, classes: 'enyo-fit'}
    ],
    beat: function() {
        this.set('$.text.value', this.get('$.text.value') + 'tick ');
        return true;
    }
});