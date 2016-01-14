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

module.exports.CatetorySchema = CategorySchema;
module.exports.categorySchema = categorySchema;

// Create the 'ecCategory' model out of the 'CategorySchema'
mongoose.model('ecCategory', CategorySchema);

