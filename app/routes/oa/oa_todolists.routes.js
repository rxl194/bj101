// Invoke 'strict' JavaScript mode
'use strict';

// Load the module dependencies
var oaTodolists = require('../../controllers/oa/oa_todolists.controller');

// Define the routes module' method
module.exports = function(app) {
	// Set up the 'oaTodolists' base routes 
	app.route('/api/oa/todolists')
	   .get(oaTodolists.list);
	
};

