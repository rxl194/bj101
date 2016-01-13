
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var PORT = process.env.PORT || 3000;

var mongoose = require('./config/mongoose'),
    express = require('./config/express'),
    passport = require('./config/passport');

var db = mongoose();
var app = express();
var passport = passport();

app.listen(PORT);
module.exports = app;

console.log('Server running at port ' + PORT + '!');


