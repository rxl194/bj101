// Invoke 'strict' JavaScript mode
'use strict';

// Configure the 'coa_todolists' module routes
angular.module('coa_todolists').config(['$routeProvider',
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

