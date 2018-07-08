var Control = require('enyo/Control');
var Eventer = require('./eventer');

module.exprots = Control.kind({
    name: 'Subscriber',
    components: [
        {kind: 'Eventer', onMyEvent: 'answered'}
    ],
    answered: function(sender, event) {
        alert('The answer is ' + event.answer);
        alert('originator is ' + event.originator);
        return(true);
    }
});