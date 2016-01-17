// Invoke 'strict' JavaScript mode
'use strict';

// Configure the 'articles' module routes
angular.module('cbo_articles').config(['$routeProvider',
	function($routeProvider) {
		$routeProvider.
		when('/cbo/articles', {
			templateUrl: 'cbo/articles/views/cbo.list-articles.view.html'
		}).
		when('/cbo/articles/create', {
			templateUrl: 'cbo/articles/views/cbo.create-article.view.html'
		}).
		when('/cbo/articles/:articleId', {
			templateUrl: 'cbo/articles/views/cbo.view-article.view.html'
		}).
		when('/cbo/articles/:articleId/edit', {
			templateUrl: 'cbo/articles/views/cbo.edit-article.view.html'
		});
	}
]); 

