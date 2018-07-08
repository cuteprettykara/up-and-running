var Control = require('enyo/Control');

module.exports = Control.kind({
    name: 'ShadowKind',
    original: 3,
    content: null,
    bindings: [
        {from: 'original', to: 'content', oneWay: false}
    ]
});