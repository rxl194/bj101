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

// Create a new controller method that creates new spsProducts
exports.create = function(req, res) {
  // Create a new spsProduct object
  var spsProduct = new SpsProduct(req.body);

  // Try saving the spsProduct
  spsProduct.save(function(err) {
    if (err) {
      // If an error occurs send the error message
      return res.status(400).send({
        message: getErrorMessage(err)
      });
    } else {
      // Send a JSON representation of the spsProduct 
      res.json(spsProduct);
    }
  });
};

// Init spsProducts
exports.init = function(rq,res) {
  var spsProducts = [
   {"category":"Watersports","description":"A boat for one person","name":"Kayak",
    "price":275},
   {"category":"Watersports", "description":"Protective and fashionable",
    "name":"Lifejacket","price":48.95},
   {"category":"Soccer","description":"FIFA-approved size and weight",
    "name":"Soccer Ball","price":19.5},
   {"category":"Soccer","description":"Give your playing field a professional touch",
    "name":"Corner Flags","price":34.95},
   {"category":"Soccer","description":"Flat-packed 35,000-seat stadium",
    "name":"Stadium","price":79500},
   {"category":"Chess","description":"Improve your brain efficiency by 75%",
    "name":"Thinking Cap","price":16},
   {"category":"Chess","description":"Secretly give your opponent a disadvantage",
    "name":"Unsteady Chair","price":29.95},
   {"category":"Chess","description":"A fun game for the family",
    "name":"Human Chess Board","price":75},
   {"category":"Chess","description":"Gold-plated, diamond-studded King",
    "name":"Bling-Bling King","price":1200}
  ];

  var i, len =  spsProducts.length;
  for ( i=0; i<len; i++ ) {
    // Create a new spsProduct object
    var spsProduct = new SpsProduct(spsProducts[i]);

    // Try saving the spsProduct
    spsProduct.save(function(err) {
      if (err) {
        // If an error occurs send the error message
        return res.status(400).send({
          message: getErrorMessage(err)
        });
      } else {
        // Send a JSON representation of the spsProduct 
        // res.json(spsProduct);
      }
    });
  }
   
  // Send a JSON representation of the spsProducts
  res.json(spsProducts);
}

// Create a new controller method that retrieves a list of spsProducts
exports.list = function(req, res) {
  // Use the model 'find' method to get a list of orders
  SpsProduct
  .find()
  .exec(function(err, spsProducts) {
    if (err) {
      // If an error occurs send the error message
      return res.status(400).send({
        message: getErrorMessage(err)
      });
    } else {
      // Send a JSON representation of the spsProduct 
      res.json(spsProducts);
    }
  });

};

// Create a new controller method that returns an existing spsProduct
exports.read = function(req, res) {
	res.json(req.spsProduct);
};

// Create a new controller method that updates an existing spsProduct
exports.update = function(req, res) {
	// Get the spsProduct from the 'request' object
	var spsProduct = req.spsProduct;

	// Update the spsProduct fields
	spsProduct.category    = req.body.category;
	spsProduct.description = req.body.description;
	spsProduct.name        = req.body.name;
	spsProduct.price       = req.body.price;

	// Try saving the updated spsProduct
	spsProduct.save(function(err) {
		if (err) {
			// If an error occurs send the error message
			return res.status(400).send({
				message: getErrorMessage(err)
			});
		} else {
			// Send a JSON representation of the spsProduct 
			res.json(spsProduct);
		}
	});
};

// Create a new controller method that delete an existing spsProduct
exports.delete = function(req, res) {
	// Get the spsProduct from the 'request' object
	var spsProduct = req.spsProduct;

	// Use the model 'remove' method to delete the spsProduct
	spsProduct.remove(function(err) {
		if (err) {
			// If an error occurs send the error message
			return res.status(400).send({
				message: getErrorMessage(err)
			});
		} else {
			// Send a JSON representation of the spsProduct 
			res.json(spsProduct);
		}
	});
};

// Create a new controller middleware that retrieves a single existing spsProduct
exports.spsProductByID = function(req, res, next, id) {
	// Use the model 'findById' method to find a single spsProduct 
	SpsProduct.findById(_id).exec(function(err, spsProduct) {
		if (err) return next(err);
		if (!spsProduct) return next(new Error('Failed to load product ' + id));

		// If an spsProduct is found use the 'request' object to pass it to the next middleware
		req.spsProduct = spsProduct;

		// Call the next middleware
		next();
	});
};

// Create a new controller middleware that is used to authorize an spsProduct operation 
exports.hasAuthorization = function(req, res, next) {
	// If the current user is not the creator of the spsProduct send the appropriate error message
//	if (req.spsProduct.creator.id !== req.user.id) {
//		return res.status(403).send({
//			message: 'User is not authorized'
//		});
//	}

	// Call the next middleware
	next();
};

