// Invoke 'strict' JavaScript mode
'use strict';

// Configure the 'example' module routes
angular.module('example').config(['$routeProvider',
	function($routeProvider) {
		$routeProvider.
		when('/', {
			templateUrl: 'cex/meanbook/views/example.client.view.html'
		}).
		otherwise({
			redirectTo: '/'
		});
	}
]); 

