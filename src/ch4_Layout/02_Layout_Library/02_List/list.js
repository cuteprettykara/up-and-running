var kind = require('enyo/kind');
var List = require('layout/List');
var Logger = require('enyo/Logger');

module.exprots = kind({
    name: 'List',
    kind: List,
    count: 10000,
    handlers: {
        onSetupItem: 'setupItem',
        ontap: 'tapped'
    },
    components: [{ name: 'text' }],
    setupItem: function(sender, event) {
        this.set('$.text.content', 'This is row ' + event.index);
        return(true);
    },
    tapped: function(sender, event) {
        Logger.log(event.index);
    }
});