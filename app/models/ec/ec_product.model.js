// Invoke 'strict' JavaScript mode
'use strict';

var mongoose = require('mongoose'),
  ecCategory = require('./ec_category.model'),
  fx = require('../ut/ut_fx.util'),
  Schema = mongoose.Schema;

// Define a new 'ProductSchema'
var productSchema = {
  name: { type: String, required: true },
  // Pictures must start with "http://"
  pictures: [{ type: String, match: /^http:\/\//i }],
  price: {
    amount: { 
      type: Number,
      required: true,
      set: function(v) {
        this.internal.approximatePriceUSD =
          v / (fx()[this.price.currency] || 1);
        return v;
      }
    },
    // Only 5 supported currencies for now
    currency: {
      type: String,
      enum: ['USD', 'EUR', 'GBP', 'CNY', 'TWD'],
      required: true,
      set: function(v) {
        this.internal.approximatePriceUSD =
          this.price.amount / (fx()[v] || 1);
        return v;
      }
    }
  },
  category: ecCategory.Schema,
  internal: {
    approximatePriceUSD: Number
  }
};
var ProductSchema = new Schema(productSchema);

var currencySymbols = {
  'USD': '$',
  'EUR': '€',
  'GBP': '£',
  'CNY': 'Y',
  'TWD': 'NT$'
};

/*
 * Human-readable string form of price - "$25" rather
 * than "25 USD"
 */
// Set the 'displayPrice' virtual property
ProductSchema.virtual('displayPrice').get(function() {
  return currencySymbols[this.price.currency] +
    '' + this.price.amount;
});

ProductSchema.set('toObject', { virtuals: true });
ProductSchema.set('toJSON', { virtuals: true });

// Create the 'ecProduct' model out of the 'ProductSchema'
var model = mongoose.model('ecProduct', ProductSchema, 'ecproducts'); 

module.exports.Schema = productSchema;
module.exports.Model  = model;

