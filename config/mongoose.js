// Invoke 'strict' JavaScript mode
'use strict';

// Load the module dependencies
var  config = require('./config'),
  wagner = require('wagner-core'),
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
  require('../app/models/ys/ys_user.model')(wagner);
  require('../app/models/bo/bo_article.model')(wagner);
  require('../app/models/sps/sps_product.model')(wagner);
  require('../app/models/sps/sps_order.model')(wagner);
  require('../app/models/ec/ec_category.model')(wagner);

  // Load the routing files for SampleProjects
  if (process.env.BJ101_ENV_APP_M101JS === 'development') {
    require('../app/models/en/en_movies.model');
  }


  // Return the Mongoose connection instance
  return db;
};

