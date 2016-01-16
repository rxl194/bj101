// Invoke 'strict' JavaScript mode
'use strict';

// Load the module dependencies
var  config = require('./config'),
  mongoose = require('mongoose');

// Define the Mongoose configuration method
module.exports = function() {
  // Use Mongoose to connect to MongoDB
  var db = mongoose.connect(config.db, function(err,res) {
    if (err) { 
      console.log ('ERROR connecting to: ' + config.db + '. ' + err);
    } else {
      console.log ('mongodb connected');
    }
  });

  //mongoose.connection.on('error', console.error.bind(console, 'connection error:'));
  //mongoose.connection.once('open', function() {
    // we're connected!
  //  console.log('mongodb connected');
  //});

  // Load the application models 
  require('../app/models/ys/ys_user.model');
  require('../app/models/bo/bo_article.model');

  // Return the Mongoose connection instance
  return db;
};
