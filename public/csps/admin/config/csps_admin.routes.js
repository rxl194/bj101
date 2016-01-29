// Invoke 'strict' JavaScript mode
'use strict';

// Configure the 'csps_admin' module routes
angular.module('csps_admin').config(['$routeProvider',
	function($routeProvider) {
		$routeProvider.
		when('/', {
			templateUrl: 'csps/admin/views/csps_admin.view.html'
		}).
		otherwise({
			redirectTo: '/'
		});
	}
]); 

