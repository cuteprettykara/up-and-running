var
kind = require('enyo/kind'),
FittableColumns = require('layout/FittableColumns'),
FittableRows = require('layout/FittableRows');



module.exports = kind({
    name: 'FittableSample2',
    kind: FittableRows,
    components: [
        {content: 'Top', allowHtml: true, classes: 'outer-box'},
        {content: 'Middle', allowHtml: true, classes: 'outer-box'},
        {kind: FittableColumns, fit: true, classes: 'outer-box', components: [
            {content: 'Left', classes: 'inner-box'},
            {content: 'Fits!', fit: true, classes: 'inner-box'},
            {content: 'Right', classes: 'inner-box'}
        ]}
    ]
});