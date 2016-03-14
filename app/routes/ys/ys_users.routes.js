// Invoke 'strict' JavaScript mode
'use strict';

// Load the module dependencies
var ysUsers = require('../../controllers/ys/ys_users.controller'),
	passport = require('passport');

// Define the routes module' method
module.exports = function(app) {

  app.route('/api/ys/users')
    .post(ysUsers.create)
    .get(ysUsers.list);

   app.route('/api/ys/users/:ysuserId')
     .get(ysUsers.read)
     .put(ysUsers.update)
     .delete(ysUsers.delete);

  app.param('ysuserId', ysUsers.userByID);

	// Set up the 'signup' routes 
	app.route('/ys/signup')
	   .get(ysUsers.renderSignup)
	   .post(ysUsers.signup);

	// Set up the 'signin' routes 
	app.route('/ys/signin')
	   .get(ysUsers.renderSignin)
	   .post(passport.authenticate('local', {
			successRedirect: '/',
			failureRedirect: '/ys/signin',
			failureFlash: true
	   }));

	// Set up the 'signout' route
	app.get('/ys/signout', ysUsers.signout);

	// Set up the Facebook OAuth routes 
	app.get('/auth/facebook', passport.authenticate('facebook', {
		failureRedirect: '/ys/signin'
	}));
	app.get('/auth/facebook/callback', passport.authenticate('facebook', {
		failureRedirect: '/ys/signin',
		successRedirect: '/'
	}));

	// Set up the Twitter OAuth routes 
	app.get('/auth/twitter', passport.authenticate('twitter', {
		failureRedirect: '/ys/signin'
	}));
	app.get('/auth/twitter/callback', passport.authenticate('twitter', {
		failureRedirect: '/ys/signin',
		successRedirect: '/'
	}));

	// Set up the Google OAuth routes 
	app.get('/auth/google', passport.authenticate('google', {
		scope: [
			'https://www.googleapis.com/auth/userinfo.profile',
			'https://www.googleapis.com/auth/userinfo.email'
		],
		failureRedirect: '/ys/signin'
	}));
	app.get('/auth/google/callback', passport.authenticate('google', {
		failureRedirect: '/ys/signin',
		successRedirect: '/'
	}));

};

