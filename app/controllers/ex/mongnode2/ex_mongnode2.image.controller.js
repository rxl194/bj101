// Invoke 'strict' JavaScript mode
'use strict';

// Create a new 'index' controller method
exports.index = function(req, res) {
  res.send('The image:index controller ' + req.params.image_id); 
};

exports.create = function(req, res) {
  res.send('The image:create POST controller');
};

exports.like = function(req, res) {
  res.send('The image:like POST controller');  
};

exports.comment = function(req, res) {
  res.send('The image:comment POST controller');  
};

