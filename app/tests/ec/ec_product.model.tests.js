// Invoke 'strict' JavaScript mode
'use strict';

// Load the test dependencies
var app = require('../../../server.js'),
  assert = require('assert'),
  should = require('should'),
  superagent = require('superagent'),
  mongoose = require('mongoose'),
  ecCategory = mongoose.model('ecCategory'),
  ecProduct = mongoose.model('ecProduct');

var URL_ROOT = 'http://localhost:3000/api';
  
// Create an 'Article' model test suite
describe('ecCategory Model Unit Tests:', function() {  

  beforeEach(function(done) {
    // Make sure categories are empty before each test
    ecCategory.remove({}, function(error) {
      assert.ifError(error);
      ecProduct.remove({}, function(error) {
        assert.ifError(error);
        done();
      });
    });
  });
  
  it('can load a ecProduct by id', function(done) {
    // Create a single product
    var PRODUCT_ID = '000000000000000000000001';
    var ecproduct = {
      name: 'LG G4',
      _id: PRODUCT_ID,
      price: {
        amount: 300,
        currency: 'USD'
      }
    };

    ecProduct.create(ecproduct, function(error, doc) {
      assert.ifError(error);
      var url = URL_ROOT + '/ec/products/id/' + PRODUCT_ID;
      // Make an HTTP request to
      // "localhost:3000/api/ec/products/id/000000000000000000000001"
      superagent.get(url, function(error, res) {
        assert.ifError(error);
        var result;
        // And make sure we got the LG G4 back
        assert.doesNotThrow(function() {
          result = JSON.parse(res.text);
        });
        assert.ok(result);
        assert.equal(result._id, PRODUCT_ID);
        assert.equal(result.name, 'LG G4');
        done();
      });
    });
  });  
  
  it('can load all ecProduct in a category with sub-categories', function(done) {
    var categories = [
      { _id: 'Electronics' },
      { _id: 'Phones', parent: 'Electronics' },
      { _id: 'Laptops', parent: 'Electronics' },
      { _id: 'Bacon' }
    ];

    var products = [
      {
        name: 'LG G4',
        eccategory: { _id: 'Phones', ancestors: ['Electronics', 'Phones'] },
        price: {
          amount: 300,
          currency: 'USD'
        }
      },
      {
        name: 'Asus Zenbook Prime',
        eccategory: { _id: 'Laptops', ancestors: ['Electronics', 'Laptops'] },
        price: {
          amount: 2000,
          currency: 'USD'
        }
      },
      {
        name: 'Flying Pigs Farm Pasture Raised Pork Bacon',
        eccategory: { _id: 'Bacon', ancestors: ['Bacon'] },
        price: {
          amount: 20,
          currency: 'USD'
        }
      }
    ];

    // Create 4 categories
    ecCategory.create(categories, function(error, categories) {
      assert.ifError(error);
      // And 3 products
      ecProduct.create(products, function(error, products) {
        assert.ifError(error);
        var url = URL_ROOT + '/ec/products/eccategory/Electronics';
        // Make an HTTP request to localhost:3000/products/ancestor/Electronics
        superagent.get(url, function(error, res) {
          assert.ifError(error);
          var result;
          assert.doesNotThrow(function() {
            result = JSON.parse(res.text);
          });
          assert.equal(result.length, 2);
          // Should be in ascending order by name
          assert.equal(result[0].name, 'Asus Zenbook Prime');
          assert.equal(result[1].name, 'LG G4');

          // Sort by price, ascending
          var url = URL_ROOT + '/ec/products/eccategory/Electronics?price=1';
          superagent.get(url, function(error, res) {
            assert.ifError(error);
            var result;
            assert.doesNotThrow(function() {
              result = JSON.parse(res.text);
            });
            assert.equal(result.length, 2);
            // Should be in ascending order by name
            assert.equal(result[0].name, 'LG G4');
            assert.equal(result[1].name, 'Asus Zenbook Prime');
            done();
          });
        });
      });
    });
  });  

});