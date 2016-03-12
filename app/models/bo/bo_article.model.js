// Invoke 'strict' JavaScript mode
'use strict';

// Load the module dependencies
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

module.exports = function(wagner) {  

  // Define a new 'ArticleSchema'
  var articleSchema = {
    created: {
      type: Date,
      default: Date.now
    },
    title: {
      type: String,
      default: '',
      trim: true,
      required: 'Title cannot be blank'
    },
    content: {
      type: String,
      default: '',
      trim: true
    },
    creator: {
      type: Schema.ObjectId,
      ref: 'ysUser'
    }
  };
  var ArticleSchema = new Schema(articleSchema);   

  // Create the 'Article' model out of the 'ArticleSchema'
  var model = mongoose.model('boArticle', ArticleSchema);
  wagner.factory('boArticle', function() {
    return model;
  });   
  
  return {
      Schema:    articleSchema,
      Model:     model,
      boArticle: model
  };  
};
