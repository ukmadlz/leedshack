var express = require('express');
var parser  = require('body-parser');

function init() {
    var app = express();
    app.use(parser.json());
    app.use('/player', require('./routes/player'));
    // TODO define other routes here
    app.listen('80');
    console.log('Server running on port 80');
};

exports.init = init;