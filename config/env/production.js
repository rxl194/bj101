
var urihost = 
  process.env.MONGOLAB_URI || 
  process.env.MONGOHQ_URL || 
  'mongodb://localhost';


module.exports = {
  // Production configuration options
  db: urihost + '/mean-book',
  sessionSecret: 'productionSessiionSecrt'
};

