// Invoke 'strict' JavaScript mode
'use strict';

// Load the module dependencies
var mongoose = require('mongoose'),
  SpsOrder = mongoose.model('spsOrder');

// Create a new error handling controller method
var getErrorMessage = function(err) {
	if (err.errors) {
		for (var errName in err.errors) {
			if (err.errors[errName].message) return err.errors[errName].message;
		}
	} else {
		return 'Unknown server error';
	}
};

// Create a new controller method that creates new orders
exports.create = function(req, res) {
  // Create a new order object
  var order = new SpsOrder(req.body);

  // Try saving the order
  order.save(function(err) {
    if (err) {
      // If an error occurs send the error message
      return res.status(400).send({
        message: getErrorMessage(err)
      });
    } else {
      // Send a JSON representation of the order 
      res.json(order);
    }
  });
};

// Create a new controller method that retrieves a list of orders
exports.list = function(req, res) {
  // Use the model 'find' method to get a list of orders
  SpsOrder
  .find()
  .exec(function(err, orders) {
    if (err) {
      // If an error occurs send the error message
      return res.status(400).send({
        message: getErrorMessage(err)
      });
    } else {
      // Send a JSON representation of the order 
      res.json(orders);
    }
  });
};

