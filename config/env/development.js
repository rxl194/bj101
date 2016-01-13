var urihost = 
  process.env.MONGOLAB_URI || 
  process.env.MONGOHQ_URL || 
  'mongodb://localhost';

var facebook_id =
  process.env.FACEBOOK_ID || 
  'Facebook Application Id';

var facebook_secret = 
  process.env.FACEBOOK_CLIENT_SECRET ||
  'Facebook Application Secret';

var facebook_callback_url =
  process.env.FACEBOOK_CALLBACK_URL ||
  "http://localhost:3000/auth/facebook/callback"

module.exports = {
  // Development configuration options
  db: urihost + '/mean-book',
  sessionSecret: 'developmentSessiionSecrt',
  facebook: {
    clientID: facebook_id,
    clientSecret: facebook_secret,
    callbackURL: facebook_callback_url
  },
  twitter: {
    clientID: 'FsLl4XeciuVjLA6fFPCsB9TAz',
    clientSecret: 'gce6rLbYFgQ4wBC3Y59TYlPuG3HFAIT0k9G661vl82FXinWCCs',
    callbackURL: 'http://localhost:3000/auth/twitter/callback'
	},
  google: {
    clientID: 'Application Id',
    clientSecret: 'Application Secret',
    callbackURL: 'http://localhost:3000/auth/google/callback'
  }
};

