var server = require('./server');
var db     = require('./db');
var map    = require('./map');

map.create();
server.init(db);