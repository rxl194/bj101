// Invoke 'strict' JavaScript mode
'use strict';

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var PORT = process.env.PORT || 3000;

// Load the module dependencies
var mongoose = require('./config/mongoose'),
    wagner = require('wagner-core'),
    express = require('./config/express'),
    passport = require('./config/passport');

// Create a new Mongoose connection instance
var db = mongoose(wagner);

// Create a new Express application instance
var app = express(db, wagner);

// Configure the Passport middleware
var passport = passport();

app.listen(PORT);
module.exports = app;

console.log('Server running at port ' + PORT + '!');


