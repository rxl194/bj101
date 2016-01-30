// Invoke 'strict' JavaScript mode
'use strict';

// Create a new 'render' controller method
exports.render = function(req, res) {
  var myTitle = 'Sports Store Admin';
  var fullName = 'Adam Developer';
  var adminUser = null;
  if (req.user) {
    fullName = req.user.fullName;
    myTitle = fullName + "\'s " + myTitle;
    if (req.user.provider === 'local' && req.user.username === 'fl2')
      adminUser = JSON.stringify(req.user);
  }

  // Use the 'response' object to render the 'index' view with a 'title' and 'userFullName' properties
  res.render('ex/proangular/sps_admin', {
    title: myTitle,
    admin_user: adminUser
  });
};

