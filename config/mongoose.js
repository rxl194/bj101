
var config = require('./config'),
    mongoose = require('mongoose');

module.exports = function() {
  var db = mongoose.connect(config.db, function(err,res) {
    if (err) { 
      console.log ('ERROR connecting to: ' + config.db + '. ' + err);
    } else {
      console.log ('mongodb connected');
    }
  });

  //mongoose.connection.on('error', console.error.bind(console, 'connection error:'));
  //mongoose.connection.once('open', function() {
    // we're connected!
  //  console.log('mongodb connected');
  //});

  require('../app/models/ys/ys_user.model');

  return db;
};
