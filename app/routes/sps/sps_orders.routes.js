// Invoke 'strict' JavaScript mode
'use strict';

// Load the module dependencies
var spsOrders = require('../../controllers/sps/sps_orders.controller');

// Define the routes module' method
module.exports = function(app) {
  // Set up the 'Sports Product' base routes 
  app.route('/api/sps/orders')
     .get(spsOrders.list);
};

