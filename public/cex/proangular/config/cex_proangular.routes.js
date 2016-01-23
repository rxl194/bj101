// Invoke 'strict' JavaScript mode
'use strict';

// Configure the 'cex_proangular' module routes
angular.module('cex_proangular').config(['$routeProvider',
	function($routeProvider) {
		$routeProvider.
		when('/', {
			templateUrl: '/cex/proangular/views/cex_proangular.view.html'
		}).
		otherwise({
			redirectTo: '/'
		});
	}
]); 

