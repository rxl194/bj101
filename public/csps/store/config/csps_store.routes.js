// Invoke 'strict' JavaScript mode
'use strict';

// Configure the 'articles' module routes
angular.module('csps_store').config(['$routeProvider',
	function($routeProvider) {
		$routeProvider.
		when('/csps/checkout', {
			templateUrl: '/csps/cart/views/csps_checkout.view.html'
		}).
		when('/csps/placeorder', {
			templateUrl: '/csps/cart/views/csps_placeorder.view.html'
		}).
		when('/csps/products', {
			templateUrl: '/csps/products/views/csps_catproduct.view.html'
		}).
		when('/csps/complete', {
			templateUrl: '/csps/products/views/csps_thankyou.view.html'
		}).
		otherwise({
			templateUrl: '/csps/products/views/csps_catproduct.view.html'
		});
	}
]); 

