
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var PORT = process.env.PORT || 3000;

var express = require('./config/express');


var app = express();
app.listen(PORT);
module.exports = app;

console.log('Server running at port ' + PORT + '!');


