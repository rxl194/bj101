// Invoke 'strict' JavaScript mode
'use strict';

// Create a new 'index' controller method
exports.index = function(req, res) {
  var viewModel = {
    image: {
      uniqueId:       1,
      title:          'Sample Image 1',
      description:    'This is a sample.',
      filename:       'sample1.jpg',
      views:          0,
      likes:          0,
      timestamp:      Date.now
    },
    comments: [
      {
        image_id:   1,
        email:      'test@testing.com',
        name:       'Test Tester',
        gravatar:   'http://www.gravatar.com/avatar/9a99fac7b524fa443560ec7b5ece5ca1?d=monsterid&s=45',
        comment:    'This is a test comment...',
        timestamp:  Date.now()
      },{
      image_id:   1,
        email:      'test@testing.com',
        name:       'Test Tester',
        gravatar:   'http://www.gravatar.com/avatar/9a99fac7b524fa443560ec7b5ece5ca1?d=monsterid&s=45',
        comment:    'Another followup comment!',
        timestamp:  Date.now()
      }
    ]
  };  

  res.render('image', viewModel);
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

