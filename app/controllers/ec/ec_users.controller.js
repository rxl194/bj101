// Invoke 'strict' JavaScript mode
'use strict';

// Load the module dependencies
var mongoose = require('mongoose'),
	EcUser = mongoose.model('ecUser'),
	status = require('http-status'),
	ut_controllers = require('../ut/ut_controllers.util');  

// Create a new controller method that creates new ecUsers
exports.create = function(wagner) { 
	return wagner.invoke(function(ecUser) {
    return function(req, res) {
      try {
        var cart = req.body.data.cart;
      } catch(e) {
        return res.
          status(status.BAD_REQUEST).
          json({ error: 'No cart specified!' });
      }
	  
      // Create a new ecUser object
      var ecUser = new EcUser(req.body);

      // Set the ecUser's 'ysuser' property
      ecUser.ysuser = req.user;
	  
	  req.ecuser = ecUser;
      // Try saving the ecUser
      ecUser.save(function(err) {
        if (err) {
          // If an error occurs send the error message
          return res.status(status.INTERNAL_SERVER_ERROR).send({
            message: ut_controllers.getErrorMessage(err)
          });
        } else {
          // Send a JSON representation of the ecUser 
          res.json(ecUser);
        }
      });
    };
	});
};