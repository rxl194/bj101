// Invoke 'strict' JavaScript mode
'use strict';

// Define the routes module' method
module.exports = function(app) {

  var ex_umdbm10 = require('../../../controllers/ex/umdbm101/ex_umdbm101.controller');

  app.get('/ex/umdbm101', ex_umdbm10.render);
};

