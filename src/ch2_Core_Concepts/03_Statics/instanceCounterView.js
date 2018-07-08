var Control = require('enyo/Control');
var InstanceCounter = require('./instanceCounter')


module.exprots = Control.kind({
    name: 'InstanceCounterView',
    components: [
        {kind: 'InstanceCounter'},
        {kind: 'InstanceCounter'},
        {name: 'total'}
    ],
    rendered: function() {
        this.inherited(arguments);
        this.set('$.total.content', 'Total InstanceCounters: ' + InstanceCounter.currentCount())
    }
});