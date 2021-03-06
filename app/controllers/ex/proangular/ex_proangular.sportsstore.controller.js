// Invoke 'strict' JavaScript mode
'use strict';

// Create a new 'render' controller method
exports.render = function(req, res) {
  var myTitle = 'Sports Store';
  var fullName = 'Adam Developer';
  if ( req.user ) {
    fullName = req.user.fullName;
    myTitle = fullName + "\'s " + myTitle;
  }

  // Use the 'response' object to render the 'index' view with a 'title' and 'userFullName' properties
  res.render('ex/proangular/sportsstore', {
    title: myTitle,
    cys_user: JSON.stringify(req.user),
  });
};

