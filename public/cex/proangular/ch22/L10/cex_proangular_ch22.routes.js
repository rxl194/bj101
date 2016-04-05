// Invoke 'strict' JavaScript mode
'use strict';

// Configure the 'coa_todolists' module routes
angular.module('cex_proangular_ch21').config(['$routeProvider', '$locationProvider',
  function($routeProvider, $locationProvider) {

    //    $locationProvider.html5Mode(true);

    $routeProvider.
    when('/', {
      templateUrl: '/cex/proangular/ch22/L10/tableView.html'
    }).
    when('/list', {
      templateUrl: '/cex/proangular/ch22/L10/tableView.html'
    }).
    when('/edit/:id', {
        templateUrl: "/cex/proangular/ch22/L10/editorView.html"
    }).
    when('/edit/:id/:data*', {
        templateUrl: "/cex/proangular/ch22/L10/editorView.html"
    }).    
    when('/create', {
        templateUrl: "/cex/proangular/ch22/L10/editorView.html"
    }).    
    otherwise({
      redirectTo: '/'
    });
  }
]); 

