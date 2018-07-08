 var Control = require('enyo/Control');
var Button = require('onyx/Button');
var Checkbox = require('onyx/Checkbox');
var Input = require('onyx/Input');
var RichText = require('onyx/RichText');

module.exprots = Control.kind({
    name: 'OnyxControls',
    components: [
        {kind: Button, content: 'Click', ontap: 'tapped'},
        { tag: 'br'},
        { kind: Checkbox, checked: true, onchange: 'changed' },
        { tag: 'br'},
        { kind: Input, placeholder: 'Enter something', onchange: 'changed' },
        { tag: 'br'},
        { kind: RichText, value: '<i>Italics</i>', onchange: 'changed' }
    ],
    tapped: function(sender, event) {
        console.log('tapped...');
        return true;
    }
})