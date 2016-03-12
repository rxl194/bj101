// Invoke 'strict' JavaScript mode
'use strict';

// Create a new controller method that retrieves a list of articles
exports.list = function(wagner) {
  
  return wagner.invoke(function(ecCategory) {
    return function(req, res) {
      // Use the model 'find' method to get a list of categorys
      ecCategory.find().exec(function(err, categorys) {
        if (err) {
          // If an error occurs send the error message
          return res.status(400).send({
            message: getErrorMessage(err)
          });
        } else {
          // Send a JSON representation of the category 
          res.json(categorys);
        }
      });
    };
  });

};

