// Invoke 'strict' JavaScript mode
'use strict';

// Load the test dependencies
var app = require('../../../server.js'),
  should = require('should'),
  mongoose = require('mongoose'),
  category = mongoose.model('ecCategory');
