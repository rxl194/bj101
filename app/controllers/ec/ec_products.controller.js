// Invoke 'strict' JavaScript mode
'use strict';

var ut_controllers = require('../ut/ut_controllers.util');

// Create a new controller method that retrieves a list of products
exports.list = function(wagner) {  
  return wagner.invoke(function(ecProduct) {
    return function(req, res) {
      // Use the model 'find' method to get a list of products
      ecProduct.find().exec(function(err, products) {
        if (err) {
          // If an error occurs send the error message
          return res.status(400).send({
            message: ut_controllers.getErrorMessage(err)
          });
        } else {
          // Send a JSON representation of the product 
          res.json(products);
        }
      });
    };
  });
};

// Create a new controller method that returns an existing product
exports.listById = function(wagner) {
  return wagner.invoke(function(ecProduct) {
    return function(req, res) {
      ecProduct.findOne({ _id: req.params.id },
        ut_controllers.handleOne.bind(null, 'product', res));
    };
  });
};



