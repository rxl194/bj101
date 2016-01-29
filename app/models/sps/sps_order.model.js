// Invoke 'strict' JavaScript mode
'use strict';

// Load the module dependencies
var mongoose = require('mongoose'),
      Schema = mongoose.Schema;

// Define a new SportStore Order 'SpsOrderSchema'
var spsOrderSchema = {
  id: {
    type: Number
  },
  name: {
    type: String,
    required: 'SportStore Order name cannot be blank'
  },
  street: {
    type: String,
    required: 'SportStore Order street cannot be blank'
  },
  city: {
    type: String,
    required: 'SportStore Order city cannot be blank'
  },
  state: {
    type: String,
    required: 'SportStore Order state cannot be blank'
  },
  zip: {
    type: String,
    required: 'SportStore Order zip cannot be blank'
  },
  country: {
    type: String,
    required: 'SportStore Order country cannot be blank'
  },
  giftwrap: {
    type: Boolean
  },
  products: [{
    type: String,
    ref: 'spsProduct'
  }]
};
var SpsOrderSchema = new Schema(spsOrderSchema);

// Create the 'SpsOrder' model out of the 'SpsOrderSchema '
exports.Schema = spsOrderSchema;
exports.Model = mongoose.model('spsOrder', SpsOrderSchema);

