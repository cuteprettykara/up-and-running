var Control = require('enyo/Control');
var Button = require('enyo/Button');
var Checkbox = require('enyo/Checkbox');
var Input = require('enyo/Input');
var RichText = require('enyo/RichText');

module.exprots = Control.kind({
    name: 'CoreControls',
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