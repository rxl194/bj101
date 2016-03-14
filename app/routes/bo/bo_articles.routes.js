// Invoke 'strict' JavaScript mode
'use strict';

// Load the module dependencies
var users = require('../../controllers/ys/ys_users.controller'),
	boArticles = require('../../controllers/bo/bo_articles.controller');

// Define the routes module' method
module.exports = function(app) {
	// Set up the 'boArticles' base routes 
	app.route('/api/bo/articles')
	   .get(boArticles.list)
	   .post(users.requiresLogin, boArticles.create);
	
	// Set up the 'articles' parameterized routes
	app.route('/api/bo/articles/:boarticleId')
	   .get(boArticles.read)
	   .put(users.requiresLogin, boArticles.hasAuthorization, boArticles.update)
	   .delete(users.requiresLogin, boArticles.hasAuthorization, boArticles.delete);

	// Set up the 'articleId' parameter middleware   
	app.param('boarticleId', boArticles.articleByID);
};
