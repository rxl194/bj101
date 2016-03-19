// Invoke 'strict' JavaScript mode
'use strict';

var mongoose = require('mongoose'),
	Schema = mongoose.Schema;
	
// Define a new 'ecUserSchema'	
var ecUserSchema = {
  ysuser: {
    type: Schema.ObjectId,
    ref: 'ysUser'	  
  },
  profile: {
    picture: {
      type: String,
      required: true,
      match: /^http:\/\//i
    }
  },
  data: {
    cart: [{
      product: {
        type: mongoose.Schema.Types.ObjectId
      },
      quantity: {
        type: Number,
        default: 1,
        min: 1
      }
    }]
  }
};
var UserSchema = new Schema(ecUserSchema); 

UserSchema.set('toObject', { virtuals: true });
UserSchema.set('toJSON', { virtuals: true });

// Create the 'UserModel' model out of the 'ecUserSchema'
var model = mongoose.model('ecUser', UserSchema);

module.exports.Schema = ecUserSchema;
module.exports.Model  = model;

