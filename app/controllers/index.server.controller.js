exports.render = function(req, res) {
  res.send('Hello World ' + process.env.NODE_ENV);
};

