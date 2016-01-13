
var config = require('./config'),
    mongoose = require('mongoose');

module.exports = function() {
  var db = mongoose.connect(config.db, function(err,res) {
    if (err) { 
      console.log ('ERROR connecting to: ' + uristring + '. ' + err);
    } else {
      console.log ('mongodb connected');
    }
  });

  //mongoose.connection.on('error', console.error.bind(console, 'connection error:'));
  //mongoose.connection.once('open', function() {
    // we're connected!
  //  console.log('mongodb connected');
  //});

  return db;
};
