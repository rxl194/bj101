// Invoke 'strict' JavaScript mode
'use strict';

// Load the module dependencies
var  config = require('./config'),  
  mongoose = require('mongoose'),
  _ = require('underscore');

// Define the Mongoose configuration method
module.exports = function(wagner) {
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
  
  var mongooseModels = {};

  // Load the application models 
  mongooseModels.ysUser = require('../app/models/ys/ys_user.model');
  mongooseModels.boArticle = require('../app/models/bo/bo_article.model');
  mongooseModels.spsProduct = require('../app/models/sps/sps_product.model');
  mongooseModels.spsOrder = require('../app/models/sps/sps_order.model');
  mongooseModels.ecCategory = require('../app/models/ec/ec_category.model');
  mongooseModels.ecProduct = require('../app/models/ec/ec_product.model');
  mongooseModels.ecUser = require('../app/models/ec/ec_user.model');
  
  // Load the routing files for SampleProjects
  if (process.env.BJ101_ENV_APP_M101JS === 'development') {
    mongooseModels.enMovie = require('../app/models/en/en_movies.model');
  }
  
  // To ensure DRY-ness, register factories in a loop
  _.each(mongooseModels, function(value, key) {
    wagner.factory(key, function() {
      return value.Model;
    });
  });  
    
  // Return the Mongoose connection instance
  return db;
};

