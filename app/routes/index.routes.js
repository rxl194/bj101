module.exports = function(app) {
  var index = require('../controllers/index.controller');
  app.get('/', index.render);

  var ex_proangular = require('../controllers/ex/ex_proangular.controller');
  app.get('/ex/proangular', ex_proangular.render);
};

