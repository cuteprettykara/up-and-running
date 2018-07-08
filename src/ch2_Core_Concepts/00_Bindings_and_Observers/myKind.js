var Control = require('enyo/Control');

module.exports = Control.kind({
    name: 'MyKind',
    content: 'Hello World!',
    myValue: 3,
    observers: [
        {path: 'myValue', method:'myValueUpdated'}
    ],
    myValueUpdated: function(oldValue, newValue) {
        // Some processing
        console.log('myValueUpdated from ' + oldValue + ' to ' + newValue);
        this.set('content', 'changed');
    }
});