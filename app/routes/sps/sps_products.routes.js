// Invoke 'strict' JavaScript mode
'use strict';

// Load the module dependencies
var spsProducts = require('../../controllers/sps/sps_products.controller');

// Define the routes module' method
module.exports = function(app) {
  // Set up the 'Sports Product' base routes 
  app.route('/api/sps/products/init')
     .post(spsProducts.init);

  app.route('/api/sps/products')
     .get(spsProducts.list)
     .post(spsProducts.create);
};

