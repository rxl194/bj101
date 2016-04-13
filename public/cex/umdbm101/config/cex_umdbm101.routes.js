// Invoke 'strict' JavaScript mode
'use strict';

// Configure the 'cex_umdbm101' module routes
angular.module('cex_umdbm101')
.config(['$routeProvider',
	function($routeProvider) {
		$routeProvider.
		when('/', {
			templateUrl: '/cex/umdbm101/views/index.html'
		}).
		otherwise({
			redirectTo: '/'
		});
	}
]); 

