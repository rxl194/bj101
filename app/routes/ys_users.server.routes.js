var users = require('../../app/controllers/ys_users.server.controller');

module.exports = function(app) {
  app.route('/ys/users')
    .post(users.create)
    .get(users.list);

  app.route('/ys/users/:userId')
     .get(users.read);

  app.param('userId', users.userByID);


};

