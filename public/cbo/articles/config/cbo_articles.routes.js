// Invoke 'strict' JavaScript mode
'use strict';

// Configure the 'articles' module routes
angular.module('cbo_articles').config(['$routeProvider',
	function($routeProvider) {
		$routeProvider.
		when('/articles', {
			templateUrl: 'cbo/articles/views/cbo.list-articles.view.html'
		}).
		when('/articles/create', {
			templateUrl: 'cbo/articles/views/cbo.create-article.view.html'
		}).
		when('/articles/:articleId', {
			templateUrl: 'cbo/articles/views/cbo.view-article.view.html'
		}).
		when('/articles/:articleId/edit', {
			templateUrl: 'cbo/articles/views/cbo.edit-article.view.html'
		});
	}
]); 

