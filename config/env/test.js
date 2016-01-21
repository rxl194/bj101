// Invoke 'strict' JavaScript mode
'use strict';

var urihost = 
  process.env.MONGOLAB_URI || 
  process.env.MONGOHQ_URL || 
  'mongodb://localhost';

var facebook_client_id =
  process.env.FACEBOOK_CLIENT_ID || 
  'Facebook Application Id';

var facebook_client_secret = 
  process.env.FACEBOOK_CLIENT_SECRET ||
  'Facebook Application Secret';

var facebook_callback_url =
  process.env.FACEBOOK_CALLBACK_URL ||
  "http://localhost:3000/auth/facebook/callback";

var twitter_client_id =
  process.env.TWITTER_CLIENT_ID || 
  'Twitter Application Id';

var twitter_client_secret = 
  process.env.TWITTER_CLIENT_SECRET ||
  'Twitter Application Secret';

var twitter_callback_url =
  process.env.TWITTER_CALLBACK_URL ||
  "http://localhost:3000/auth/twitter/callback";

var google_client_id =
  process.env.GOOGLE_CLIENT_ID || 
  'Google Application Id';

var google_client_secret = 
  process.env.GOOGLE_CLIENT_SECRET ||
  'Google Application Secret';

var google_callback_url =
  process.env.GOOGLE_CALLBACK_URL ||
  "http://localhost:3000/auth/google/callback";

// Set the 'test' environment configuration object
module.exports = {
  db: urihost + '/mean-book-test',
  sessionSecret: 'testSessionSecret',
  facebook: {
    clientID: facebook_client_id,
    clientSecret: facebook_client_secret,
    callbackURL: facebook_callback_url
  },
  twitter: {
    clientID: twitter_client_id,
    clientSecret: twitter_client_secret,
    callbackURL: twitter_callback_url
  },
  google: {
    clientID: google_client_id,
    clientSecret: google_client_secret,
    callbackURL: google_callback_url
  }
};
