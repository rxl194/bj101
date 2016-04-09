// Invoke 'strict' JavaScript mode
'use strict';

// Create a new error handling controller method
var getErrorMessage = function(err) {
	if (err.errors) {
		for (var errName in err.errors) {
			if (err.errors[errName].message) return err.errors[errName].message;
		}
	} else {
		return 'Unknown server error';
	}
};

// Create a new controller method that retrieves a list of categorys
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

// Create a new controller method that returns an existing category
exports.read = function(wagner) {
  return wagner.invoke(function(ecCategory) {
    return function(req, res) {
      res.json(req.category);
    };
  });
};

// Create a new controller middleware that retrieves a single existing category
exports.categoryByID = function(wagner) {
  return wagner.invoke(function(ecCategory) {
    return function(req, res, next, id) {
      // Use the model 'findById' method to find a single category 
      ecCategory.findById(id).exec(function(err, category) {
        if (err) return next(err);
        if (!category) return next(new Error('Failed to load category ' + id));

        // If an category is found use the 'request' object to pass it to the next middleware
        req.category = category;

        // Call the next middleware
        next();
      });
    };
  });
};

// Create a new controller middleware that retrieves a categorys by parent ecCategoryId
exports.pareCatByID = function(wagner) {
  return wagner.invoke(function(ecCategory) {
    return function(req, res, next, id) {
      // Use the model 'find' method to find a single category 
      ecCategory.find({parent: id}).exec(function(err, categorys) {
        if (err) return next(err);
        if (!categorys) return next(new Error('Failed to load categorys with parentId ' + id));

        // If an category is found use the 'request' object to pass it to the next middleware
        req.category = categorys;

        // Call the next middleware
        next();
      });
    };
  });
};


