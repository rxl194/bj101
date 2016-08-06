// Invoke 'strict' JavaScript mode
'use strict';

// Create a new 'index' controller method
exports.index = function(req, res) {
  var myTitle = 'Ex Mongnode2 SocialSite HomeCtrl';
  var fullName = 'Adam Developer';
  if ( req.user ) {
    fullName = req.user.fullName;
    myTitle = fullName + "\'s " + myTitle;
  }

  // Use the 'response' object to render the 'index' view with a 'title' and 'userFullName' properties
  res.render('index', {
    title: myTitle,
    cys_user: JSON.stringify(req.user),
  });
  // res.send('The home:index controller');
};

