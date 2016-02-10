// Invoke 'strict' JavaScript mode
'use strict';

// Create a new 'render' controller method
exports.render = function(req, res, db) {

  db.collection('m101js_movies').find().toArray(function(err, docs) {

    // Use the 'response' object to render the 'index' view with a 'title' and 'userFullName' properties
    res.render('ex/m101js/w01/movies', {
        'movies': docs 
    });

  });
};

