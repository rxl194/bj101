// Invoke 'strict' JavaScript mode
'use strict';

// Load the module dependencies
var users = require('../../controllers/ys/ys_users.controller'),
  spsProducts = require('../../controllers/sps/sps_products.controller');

// Define the routes module' method
module.exports = function(app) {
  // Set up the 'Sports Product' base routes 
  app.route('/api/sps/products/init')
     .post(spsProducts.init);

  app.route('/api/sps/products')
     .get(spsProducts.list)
     .post(users.requiresLogin, spsProducts.create);

	// Set up the 'products' parameterized routes
	app.route('/api/sps/products/:spsproductId')
	   .get(spsProducts.read)
	   .put(users.requiresLogin, spsProducts.hasAuthorization, spsProducts.update)
	   .delete(users.requiresLogin, spsProducts.hasAuthorization, spsProducts.delete);

	// Set up the 'productId' parameter middleware   
	app.param('spsproductId', spsProducts.spsProductByID);
};

