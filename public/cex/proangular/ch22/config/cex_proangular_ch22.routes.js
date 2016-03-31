// Invoke 'strict' JavaScript mode
'use strict';

// Configure the 'coa_todolists' module routes
angular.module('cex_proangular_ch21').config(['$routeProvider', '$locationProvider',
	function($routeProvider, $locationProvider) {
    
//    $locationProvider.html5Mode(true);
    
		$routeProvider.
    when('/', {
      templateUrl: '/cex/proangular/ch22/views/tableView.html'
    }).
		when('/list', {
			templateUrl: '/cex/proangular/ch22/views/tableView.html'
		}).
    when('/edit', {
        templateUrl: "/cex/proangular/ch22/views/editorView.html"
    }).
    when('/create', {
        templateUrl: "/cex/proangular/ch22/views/editorView.html"
    }).    
		otherwise({
			redirectTo: '/'
		});
	}
]); 

