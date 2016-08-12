// Invoke 'strict' JavaScript mode
'use strict';

var sidebar = require('../helpers/ex_mongnode2.sidebar.helper');

// Create a new 'index' controller method
exports.index = function(req, res) {
  var myTitle = 'Ex Mongnode2 SocialSite HomeCtrl';
  var fullName = 'Adam Developer';
  if ( req.user ) {
    fullName = req.user.fullName;
    myTitle = fullName + "\'s " + myTitle;
  }
  
  var viewModel = {
    title:    myTitle,
    cys_user: JSON.stringify(req.user),    
    images: [
      {
        uniqueId:       1,
        title:          'Sample Image 1',
        description:    '',
        filename:       'sample1.jpg',
        views:          0,
        likes:          0,
        timestamp:      Date.now
      }, {
        uniqueId:       2,
        title:          'Sample Image 2',
        description:    '',
        filename:       'sample2.jpg',
        views:          0,
        likes:          0,
        timestamp:      Date.now
      }, {
        uniqueId:       3,
        title:          'Sample Image 3',
        description:    '',
        filename:       'sample3.jpg',
        views:          0,
        likes:          0,
        timestamp:      Date.now
      }, {
        uniqueId:       4,
        title:          'Sample Image 4',
        description:    '',
        filename:       'sample4.jpg',
        views:          0,
        likes:          0,
        timestamp:      Date.now
      }
    ]
  };  

  // Use the 'response' object to render the 'index' view with a 'title' and 'userFullName' properties
  sidebar(viewModel, function(viewModel) {
    res.render('index', viewModel);
  });

};

