// Invoke 'strict' JavaScript mode
'use strict';

// Define the routes module' method
module.exports = function(app) {
  var ex_proangular = require('../../controllers/ex/proangular/ex_proangular.controller');
  app.get('/ex/proangular', ex_proangular.render);

  var ex_sportsstore = require('../../controllers/ex/proangular/ex_proangular.sportsstore.controller');
  app.get('/ex/proangular/sportsstore', ex_sportsstore.render);

  var ex_sps_admin = require('../../controllers/ex/proangular/ex_proangular.sps_admin.controller');
  app.get('/ex/proangular/sps_admin', ex_sps_admin.render);
};

