// Invoke 'strict' JavaScript mode
'use strict';

// Configure the 'articles' module routes
angular.module('csps_products').config(['$routeProvider',
	function($routeProvider) {
		$routeProvider.
		when('/csps/checkout', {
			templateUrl: '/csps/cart/views/csps_checkout.view.html'
		}).
		when('/csps/products', {
			templateUrl: '/csps/products/views/csps_catproduct.view.html'
		}).
		otherwise({
			templateUrl: '/csps/products/views/csps_catproduct.view.html'
		});
	}
]); 

