// Invoke 'strict' JavaScript mode
'use strict';

var ut_controllers = require('../ut/ut_controllers.util');

// Create a new controller method that retrieves a list of products
exports.list = function(wagner) {  
  return wagner.invoke(function(ecProduct) {
    return function(req, res) {
      // Use the model 'find' method to get a list of products
      ecProduct.find().exec(function(err, products) {
        if (err) {
          // If an error occurs send the error message
          return res.status(400).send({
            message: ut_controllers.getErrorMessage(err)
          });
        } else {
          // Send a JSON representation of the product 
          res.json(products);
        }
      });
    };
  });
};

// Create a new controller method that returns an existing product
exports.listById = function(wagner) {
  return wagner.invoke(function(ecProduct) {
    return function(req, res) {
      ecProduct.findOne({ _id: req.params.ecproductId },
        ut_controllers.handleOne.bind(null, null, res));
    };
  });
};

exports.listByProductCatId = function(wagner) {
  return wagner.invoke(function(ecProduct) {
    return function(req, res) {
      var sort = { name: 1 };
      if (req.query.price === "1") {
        sort = { 'internal.approximatePriceUSD': 1 };
      } else if (req.query.price === "-1") {
        sort = { 'internal.approximatePriceUSD': -1 };
      }

      ecProduct.
        find({ 'eccategory.ancestors': req.params.eccategoryId }).
        sort(sort).
        exec(ut_controllers.handleMany.bind(null, null, res));
    };
  });  
};

exports.searchTextByQuery = function(wagner) {
  return wagner.invoke(function(ecProduct) {
    return function(req, res) {
      ecProduct.
        find(
          { $text : { $search : req.params.query } },
          { score : { $meta: 'textScore' } }).
        sort({ score: { $meta : 'textScore' } }).
        limit(10).
        exec(ut_controllers.handleMany.bind(null, null, res));        
    };
  });    
};






