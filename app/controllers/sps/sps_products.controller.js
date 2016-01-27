// Invoke 'strict' JavaScript mode
'use strict';

// Load the module dependencies
var mongoose = require('mongoose'),
  SpsProduct = mongoose.model('spsProduct');

// Create a new controller method that retrieves a list of articles
exports.list_all = function(req, res) {
  var spsProducts = [
   {"category":"Watersports","description":"A boat for one person","name":"Kayak",
    "price":275},
   {"category":"Watersports", "description":"Protective and fashionable",
    "name":"Lifejacket","price":48.95},
   {"category":"Soccer","description":"FIFA-approved size and weight",
    "name":"Soccer Ball","price":19.5},
   {"category":"Soccer","description":"Give your playing field a professional touch",
    "name":"Corner Flags","price":34.95},
   {"category":"Soccer","description":"Flat-packed 35,000-seat stadium",
    "name":"Stadium","price":79500},
   {"category":"Chess","description":"Improve your brain efficiency by 75%",
    "name":"Thinking Cap","price":16},
   {"category":"Chess","description":"Secretly give your opponent a disadvantage",
    "name":"Unsteady Chair","price":29.95},
   {"category":"Chess","description":"A fun game for the family",
    "name":"Human Chess Board","price":75},
   {"category":"Chess","description":"Gold-plated, diamond-studded King",
    "name":"Bling-Bling King","price":1200}
  ];

  // Send a JSON representation of the SportProducts 
  res.json(spsProducts);
};

