// Invoke 'strict' JavaScript mode
'use strict';

// Configure the 'coa_todolists' module routes
angular.module('cex_proangular_ch21').config(['$routeProvider',
	function($routeProvider) {
		$routeProvider.
		when('/', {
			templateUrl: '/cex/proangular/ch21/views/index.html'
		}).
		otherwise({
			redirectTo: '/'
		});
	}
]); 

