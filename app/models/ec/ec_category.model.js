// Invoke 'strict' JavaScript mode
'use strict';

module.exports = function(wagner) {

  var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

  // Define a new 'CategorySchema'
  var categorySchema = {
    _id: { type: String },
    parent: {
      type: String,
      ref: 'ecCategory'
    },
    ancestors: [{
      type: String,
      ref: 'ecCategory'
    }]
  };
  var CategorySchema = new Schema(categorySchema);

  // Create the 'ecCategory' model out of the 'CategorySchema'
  var model = mongoose.model('ecCategory', CategorySchema);  
  wagner.factory('ecCategory', function() {
    return model;
  });  
  
  return {
      Schema:     categorySchema,
      Model:      model,
      ecCategory: model
  };
};

