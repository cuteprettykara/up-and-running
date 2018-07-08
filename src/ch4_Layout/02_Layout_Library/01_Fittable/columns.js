var FittableColumns = require('layout/FittableColumns');
var kind = require('enyo/kind');

module.exprots = kind({
    name: 'Columns',
    kind: FittableColumns,
    components: [
        { content: 'Fixed width', classes: 'dont' },
        { content: 'This expands', fit: true, classes: 'do' },
        { content: 'Another fixed width', classes: 'dont' }
    ]
});