// Invoke 'strict' JavaScript mode
'use strict';

// Load the module dependencies
var users = require('../../controllers/ys/ys_users.controller'),
	ecCategorys = require('../../controllers/ec/ec_categorys.controller');

// Define the routes module' method
module.exports = function(app, wagner) {
	// Set up the 'categorys' base routes 
	app.route('/api/ec/categorys')
	   .get(ecCategorys.list(wagner));
     
	// Set up the 'categorys' parameterized routes
	app.route('/api/ec/categorys/id/:eccategoryId')
	   .get(ecCategorys.read(wagner));
     
	// Set up the 'categoryId' parameter middleware   
	app.param('eccategoryId', ecCategorys.categoryByID(wagner));     
};
