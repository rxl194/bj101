// Invoke 'strict' JavaScript mode
'use strict';

var fs = require('fs'),
    path = require('path');

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
  var saveImage = function() {
    var possible = 'abcdefghijklmnopqrstuvwxyz0123456789',
    imgUrl = '';

    for(var i=0; i < 6; i+=1) {
      imgUrl += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    var tempPath = req.files.file.path,
    ext = path.extname(req.files.file.name).toLowerCase(),
    targetPath = path.resolve('./public/cex/mongnode2/upload/' + imgUrl + ext);

    if (ext === '.png' || ext === '.jpg' || ext === '.jpeg' || ext === '.gif') {
      fs.rename(tempPath, targetPath, function(err) {
        if (err) throw err;
        res.redirect('/ex/mongnode2/images/' + imgUrl);
      });
    } else {
      fs.unlink(tempPath, function () {
        if (err) throw err;

        res.json(500, {error: 'Only image files are allowed.'});
      });
    }
  };
  saveImage();
};

exports.like = function(req, res) {
  res.send('The image:like POST controller');  
};

exports.comment = function(req, res) {
  res.send('The image:comment POST controller');  
};

