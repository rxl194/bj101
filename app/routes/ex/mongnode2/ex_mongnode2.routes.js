// Invoke 'strict' JavaScript mode
'use strict';

// Define the routes module' method
module.exports = function(app) {

  var ex_mongnode2_home  = require('../../../controllers/ex/mongnode2/ex_mongnode2.home.controller');
  var ex_mongnode2_image = require('../../../controllers/ex/mongnode2/ex_mongnode2.image.controller');

  if (process.env.BJ101_ENV_CONF_EX_APP == 'mongnode2') {
    app.get('/', ex_mongnode2_home.index);
  }
  app.get('/ex/mongnode2', ex_mongnode2_home.index);
  app.get('/ex/mongnode2/images/:image_id', ex_mongnode2_image.index);
  app.post('/ex/mongnode2/images', ex_mongnode2_image.create);
  app.post('/ex/mongnode2/images/:image_id/like', ex_mongnode2_image.like);
  app.post('/ex/mongnode2/images/:image_id/comment', ex_mongnode2_image.comment);  
};

