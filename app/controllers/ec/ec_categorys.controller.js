// Invoke 'strict' JavaScript mode
'use strict';

// Load the module dependencies
var mongoose = require('mongoose'),
	ecCategory = mongoose.model('ecCategory');

// Create a new controller method that retrieves a list of articles
exports.list = function(req, res) {
  // Use the model 'find' method to get a list of categorys
  ecCategory.find().exec(function(err, categorys) {
    if (err) {
      // If an error occurs send the error message
      return res.status(400).send({
        message: getErrorMessage(err)
      });
    } else {
      // Send a JSON representation of the category 
      res.json(categorys);
    }
  });
};

  

