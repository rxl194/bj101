// Invoke 'strict' JavaScript mode
'use strict';

// Load the module dependencies
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

module.exports = function(wagner) {  
  
  // Define a new 'EnMovieSchema'
  var enMovieSchema = {
    title: {
      type: String,
      default: '',
      trim: true,
      required: 'Title cannot be blank'
    },
    year: {
      type: Number,
      min: 1900,
      max: 9999,
      default: 2000,
      trim: true,
      required: 'Year cannot be blank'
    },
    imdb: {
      type: String,
      default: '',
      trim: true
    },

  };
  var EnMovieSchema = new Schema(enMovieSchema);

  // Create the 'EnMovie' model out of the 'EnMovieSchema'
  var model = mongoose.model('enMovie', EnMovieSchema);
  wagner.factory('enMovie', function() {
    return model;
  });   
  
  return {
      Schema:  enMovieSchema,
      Model:   model,
      enMovie: model
  };    

};

