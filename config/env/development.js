var urihost = 
  process.env.MONGOLAB_URI || 
  process.env.MONGOHQ_URL || 
  'mongodb://localhost';

module.exports = {
  // Development configuration options
  db: urihost + '/mean-book',
  sessionSecret: 'developmentSessiionSecrt'
};

