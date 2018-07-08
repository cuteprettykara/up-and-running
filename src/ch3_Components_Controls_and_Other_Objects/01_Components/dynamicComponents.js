var Control = require('enyo/Control');
var Button = require('enyo/Button');

module.exprots = Control.kind({
    name: 'DynamicComponents',
    components: [
        {kind: Button, content: 'Click', ontap: 'tapped'}
    ],
    tapped: function(sender, event) {
        this.createComponent({ content: 'A new component' });
        this.render();
        return true;
    }
});