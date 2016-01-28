// Invoke 'strict' JavaScript mode
'use strict';

// Configure the 'articles' module routes
angular.module('csps_store').config(['$routeProvider',
	function($routeProvider) {
		$routeProvider.
		when('/checkout', {
			templateUrl: '/csps/cart/views/csps_checkout.view.html'
		}).
		when('/products', {
			templateUrl: '/csps/products/views/csps_catproduct.view.html'
		}).
		otherwise({
			templateUrl: '/csps/products/views/csps_catproduct.view.html'
		});
	}
]); 

