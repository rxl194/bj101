// Invoke 'strict' JavaScript mode
'use strict';

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

exports.Schema = categorySchema;

// Create the 'ecCategory' model out of the 'CategorySchema'
exports.Model = mongoose.model('ecCategory', CategorySchema);

