exports.render = function(req, res) {
  res.render('index', {
    title: 'Hello World ' + process.env.NODE_ENV
  })
};

