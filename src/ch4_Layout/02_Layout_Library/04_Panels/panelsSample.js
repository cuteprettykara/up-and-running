var kind = require('enyo/kind');
var Panels = require('layout/Panels');
var CollapsingArranger = require('layout/CollapsingArranger');
var Control = require('enyo/Control');

module.exprots = Control.kind({
    name: 'PanelsSample',
    kind: Panels,
    arrangerKind: CollapsingArranger,
    classes: 'panels-sample-panels enyo-border-box',
    // narrowFit: false,
    fit: true,
    handlers: {
        onTransitionFinish: 'transitioned'
    },
    components: [
        { name: 'panel1', style: 'background-color: blue', content: 'Panel A' },
        { name: 'panel2', style: 'background-color: grey', content: 'Panel B'  },
        { name: 'panel3', style: 'background-color: green', content: 'Panel C'  }
    ],
    transitioned: function() {
        this.log(this.index);
    }
});