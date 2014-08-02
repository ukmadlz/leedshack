var express = require('express')
  ,path = require('path')
  ,logger = require('morgan')
  ,cookieParser = require('cookie-parser')
  ,bodyParser = require('body-parser')
  url = require('url');

var monsters = require('./routes/monsters')
  ,loot = require('./routes/loot')
  ,fight = require('./routes/fight');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/monster', monsters);
app.use('/loot', loot);
app.use('/fight', fight);

/// catch 404 and forward to error handler
// app.use(function(req, res, next) {
//     var err = new Error('Not Found');
//     err.status = 404;
//     next(err);
// });

/// error handlers

// development error handler
// will print stacktrace
// if (app.get('env') === 'development') {
//     app.use(function(err, req, res, next) {
//         res.status(err.status || 500);
//         res.render('error', {
//             message: err.message,
//             error: err
//         });
//     });
// }

// production error handler
// no stacktraces leaked to user
// app.use(function(err, req, res, next) {
//     res.status(err.status || 500);
//     res.render('error', {
//         message: err.message,
//         error: {}
//     });
// });

// Start Listening
var port = process.env.PORT || 3000;
app.listen(port, function() {
    console.log('Listening on ' + port);
});

module.exports = app;
