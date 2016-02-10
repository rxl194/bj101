// Invoke 'strict' JavaScript mode
'use strict';

// Load the module dependencies
var mongoose = require('mongoose'),
	EnMovie = mongoose.model('enMovie');

// Create a new error handling controller method
var getErrorMessage = function(err) {
  if (err.errors) {
    for (var errName in err.errors) {
      if (err.errors[errName].message) return err.errors[errName].message;
    }
  } else {
    return 'Unknown server error';
  }
};

// Create a new controller method that retrieves a list of enMovies
exports.list = function(req, res) {

  // Use the model 'find' method to get a list of enMovies
  EnMovie.find().exec(function(err, enMovies) {
    if (err) {
      // If an error occurs send the error message
      return res.status(400).send({
        message: getErrorMessage(err)
      });
    } else {
      // Send a JSON representation of the enMovie 
      res.json(enMovies);
    }
  });

};


// Create a new 'render' controller method
exports.render = function(req, res) {

  // Use the model 'find' method to get a list of enMovies
  EnMovie.find().exec(function(err, movies) {

	  // Use the 'response' object to render the 'index' view with a 'title' and 'userFullName' properties
	  res.render('ex/m101js/w01/movies.html', {
		  title: 'ex_m101js w01 Movies',
		  enMovies: movies
	  });
  });

};

