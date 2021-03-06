// Invoke 'strict' JavaScript mode
'use strict';

// Load the module dependencies
var users = require('../../controllers/ys/ys_users.controller'),
	ecproducts = require('../../controllers/ec/ec_products.controller');

// Define the routes module' method
module.exports = function(app, wagner) {
	// Set up the 'products' base routes 
	app.route('/api/ec/products')
	   .get(ecproducts.list(wagner));
     
	// Set up the 'products' parameterized routes
	app.route('/api/ec/products/id/:ecproductId')
	   .get(ecproducts.listById(wagner));
     
  app.route('/api/ec/products/eccategory/:eccategoryId')
      .get(ecproducts.listByProductCatId(wagner));
      
  app.route('/api/ec/products/text/:query')
      .get(ecproducts.searchTextByQuery(wagner));      
          
};
