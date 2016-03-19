// Invoke 'strict' JavaScript mode
'use strict';

// Load the module dependencies
var ysusers = require('../../controllers/ys/ys_users.controller'),
	ecUsers = require('../../controllers/ec/ec_users.controller');

// Define the routes module' method
module.exports = function(app, wagner) {
	// Set up the 'ecUsers' base routes 
	app.route('/api/ec/users')
	   .post(ysusers.requiresLogin, ecUsers.create(wagner));	
};
