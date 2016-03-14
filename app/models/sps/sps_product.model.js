// Invoke 'strict' JavaScript mode
'use strict';

// Load the module dependencies
var mongoose = require('mongoose'),
      Schema = mongoose.Schema;      

// Define a new SportStore Product 'SpsProductSchema'
var spsProductSchema = {
  name: {
    type: String,
    required: 'SportStore Product name cannot be blank'
  },
  description: {
    type: String,
    required: 'SportStore Product description cannot be blank'
  },
  category: {
    type: String,
    required: 'SportStore Product category cannot be blank'
  },
  price: {
    type: Number,
    required: true
  }
};
var SpsProductSchema = new Schema(spsProductSchema);

// Create the 'SpsProduct' model out of the 'SpsProductSchema '
var model = mongoose.model('spsProduct', SpsProductSchema);

module.exports.Schema = spsProductSchema;
module.exports.Model  = model; 
  
