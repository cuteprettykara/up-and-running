var Control = require('enyo/Control');

module.exprots = Control.kind({
    name: 'Eventer',
    handlers: { ontap: 'myTap' },
    events: { onMyEvent: '' },
    content: 'Click for the answer',
    myTap: function() {
        this.doMyEvent({ answer: 42 });
    }
});