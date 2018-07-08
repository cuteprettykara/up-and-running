var Control = require('enyo/Control');

var RichText = require('moonstone/RichText');
var Input = require('moonstone/Input');
var Button = require('moonstone/Button');
var CheckboxItem = require('moonstone/CheckboxItem');
var InputDecorator = require('moonstone/InputDecorator');

module.exprots = Control.kind({
    name: 'MoonControls',
    classes: 'moon',
    components: [
        { kind: Button, content: 'Hello', ontap: 'tapped' },
        { kind: CheckboxItem, checked: true, content: 'Check me',
            onchange: 'changed' },
        { kind: InputDecorator, components: [
            { kind: Input, placeholder: 'Enter something',
                onchange: 'changed' }
        ] },
        { kind: InputDecorator, components: [
            { kind: RichText, value: '<i>Italics</i>',
                onchange: 'changed' }
        ] }
    ],
    tapped: function(sender, event) {
        // React to taps
    },
    changed: function(sender, event) {
        // React to changes
    }
})