// Invoke 'strict' JavaScript mode
'use strict';

// Configure the 'cex_proangular' module routes
angular.module('cex_proangular').config(['$routeProvider',
	function($routeProvider) {
		$routeProvider.
		when('/', {
			templateUrl: '/coa/todolists/views/coa_todolists.view.html'
		}).
		otherwise({
			redirectTo: '/'
		});
	}
]); 

