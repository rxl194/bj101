// Invoke 'strict' JavaScript mode
'use strict';

// Load the module dependencies
var users = require('../../controllers/ys/ys_users.controller'),
	categorys = require('../../controllers/ec/ec_categorys.controller');

// Define the routes module' method
module.exports = function(app, wagner) {
	// Set up the 'categorys' base routes 
	app.route('/api/ec/categorys')
	   .get(categorys.list(wagner));
     
	// Set up the 'categorys' parameterized routes
	app.route('/api/ec/categorys/id/:categoryId')
	   .get(categorys.read(wagner));
     
	// Set up the 'categoryId' parameter middleware   
	app.param('categoryId', categorys.categoryByID(wagner));     
};
