// Invoke 'strict' JavaScript mode
'use strict';

// Load the test dependencies
var app = require('../../../server.js'),
  assert = require('assert'),
  should = require('should'),
  superagent = require('superagent'),
  mongoose = require('mongoose'),
  ecCategory = mongoose.model('ecCategory');

var URL_ROOT = 'http://localhost:3000/api';
  
// Create an 'Article' model test suite
describe('ecCategory Model Unit Tests:', function() {  
  it('can load a ecCategory by id', function(done) {

    var url = URL_ROOT + '/ec/categorys/id/Electronics';
    // Make an HTTP request to /ec/categorys/id/Electronics
    superagent.get(url, function(error, res) {
      assert.ifError(error);
      var result;
      // And make sure we got { _id: 'Electronics' } back
      assert.doesNotThrow(function() {
        result = JSON.parse(res.text);
        console.log(result);
      });
      assert.ok(result);
      assert.equal(result._id, 'Electronics');
      done();
    });
  });  
});