// Invoke 'strict' JavaScript mode
'use strict';

// Load the module dependencies
var users = require('../../app/controllers/ys_users.server.controller'),
	passport = require('passport');

// Define the routes module' method
module.exports = function(app) {

  app.route('/ys/users')
    .post(users.create)
    .get(users.list);

   app.route('/ys/users/:userId')
     .get(users.read)
     .put(users.update)
     .delete(users.delete);

  app.param('userId', users.userByID);

	// Set up the 'signup' routes 
	app.route('/ys/signup')
	   .get(users.renderSignup)
	   .post(users.signup);

	// Set up the 'signin' routes 
	app.route('/ys/signin')
	   .get(users.renderSignin)
	   .post(passport.authenticate('local', {
			successRedirect: '/',
			failureRedirect: '/ys/signin',
			failureFlash: true
	   }));

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

	// Set up the 'signout' route
	app.get('/ys/signout', users.signout);
};

