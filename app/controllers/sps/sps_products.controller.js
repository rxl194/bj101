// Invoke 'strict' JavaScript mode
'use strict';

// Load the module dependencies
var mongoose = require('mongoose'),
  SpsProduct = mongoose.model('spsProduct');

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

// Create a new controller method that creates new products
exports.create = function(req, res) {
  // Create a new product object
  var product = new SpsProduct(req.body);

  // Try saving the product
  product.save(function(err) {
    if (err) {
      // If an error occurs send the error message
      return res.status(400).send({
        message: getErrorMessage(err)
      });
    } else {
      // Send a JSON representation of the product 
      res.json(product);
    }
  });
};

// Init products
exports.init = function(rq,res) {
  var spsProducts = [
   {"id":1, "category":"Watersports","description":"A boat for one person","name":"Kayak",
    "price":275},
   {"id":2, "category":"Watersports", "description":"Protective and fashionable",
    "name":"Lifejacket","price":48.95},
   {"id":3, "category":"Soccer","description":"FIFA-approved size and weight",
    "name":"Soccer Ball","price":19.5},
   {"id":4, "category":"Soccer","description":"Give your playing field a professional touch",
    "name":"Corner Flags","price":34.95},
   {"id":5, "category":"Soccer","description":"Flat-packed 35,000-seat stadium",
    "name":"Stadium","price":79500},
   {"id":6, "category":"Chess","description":"Improve your brain efficiency by 75%",
    "name":"Thinking Cap","price":16},
   {"id":7, "category":"Chess","description":"Secretly give your opponent a disadvantage",
    "name":"Unsteady Chair","price":29.95},
   {"id":8, "category":"Chess","description":"A fun game for the family",
    "name":"Human Chess Board","price":75},
   {"id":9, "category":"Chess","description":"Gold-plated, diamond-studded King",
    "name":"Bling-Bling King","price":1200}
  ];

  var i, len =  spsProducts.length;
}


// Create a new controller method that retrieves a list of products
exports.list = function(req, res) {
  // Use the model 'find' method to get a list of orders
  SpsProduct
  .find()
  .exec(function(err, products) {
    if (err) {
      // If an error occurs send the error message
      return res.status(400).send({
        message: getErrorMessage(err)
      });
    } else {
      // Send a JSON representation of the product 
      res.json(products);
    }
  });

};

