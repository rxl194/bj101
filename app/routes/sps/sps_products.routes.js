// Invoke 'strict' JavaScript mode
'use strict';

// Load the module dependencies
var spsProducts = require('../../controllers/sps/sps_products.controller');

// Define the routes module' method
module.exports = function(app) {
  // Set up the 'Sports Product' base routes 
  app.route('/api/sps/sps_products')
     .get(spsProducts.list_all);
};

