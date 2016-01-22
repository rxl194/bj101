// Invoke 'strict' JavaScript mode
'use strict';

// Configure the 'cex_meanbook' module routes
angular.module('cex_meanbook').config(['$routeProvider',
	function($routeProvider) {
		$routeProvider.
		when('/', {
			templateUrl: 'cex/meanbook/views/cex_meanbook.view.html'
		}).
		otherwise({
			redirectTo: '/'
		});
	}
]); 

