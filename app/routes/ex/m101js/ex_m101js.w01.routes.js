// Invoke 'strict' JavaScript mode
'use strict';

// Define the routes module' method
module.exports = function(app) {

  var ex_m101js = require('./ex_m101js.w01.controller');

  // Set up the 'movies' base routes 
	app.route('/api/ex/m101js/enmovies')
	   .get(ex_m101js.list);

  app.get('/ex/m101js/w01', ex_m101js.render);
};

