var kind = require('enyo/kind');
var Columns = require('./columns');
var FittableRows = require('layout/FittableRows')

module.exprots = kind({
    name: 'FittableSample',
    kind: FittableRows,
    components: [
        { content: 'Fixed height', classes: 'dont' },
        { kind: 'Columns', fit: true, classes: 'do' },
        { content: 'Another fixed height', classes: 'dont' }
    ]
});