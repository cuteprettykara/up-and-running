var Scroller = require('enyo/Scroller');
var Repeater = require('enyo/Repeater');
var Logger = require('enyo/Logger');

module.exprots = Scroller.kind({
    name: 'Repeater',
    components: [{
        kind: Repeater,
        count: 100,
        components: [{ name: 'text' }],
        onSetupItem: 'setupItem',
        ontap: 'tapped'
    }],
    setupItem: function(sender, event) {
        var item = event.item;
        item.set('$.text.content', 'This is row ' + event.index);
        return(true);
    },
    tapped: function(sender, event) {
        Logger.log(event.index);
    }
});