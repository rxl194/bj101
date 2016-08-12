var Stats = require('./ex_mongnode2.stats.helper'),
  Images = require('./ex_mongnode2.images.helper'),
  Comments = require('./ex_mongnode2.comments.helper');

module.exports = function(viewModel, callback){
  viewModel.sidebar = {
    stats:    Stats(),
    popular:  Images.popular(),
    comments: Comments.newest()
  };
  callback(viewModel);
};
