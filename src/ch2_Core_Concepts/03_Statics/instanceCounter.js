var Control = require('enyo/Control');


module.exprots = Control.kind({
    name: 'InstanceCounter',
    constructor: function() {
        InstanceCounter.count += 1;
        this.inherited(arguments);
    },
    statics: {
        count: 0,
        currentCount: function() {
            return(this.count);
        }
    }
});