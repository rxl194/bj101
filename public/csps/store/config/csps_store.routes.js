// Invoke 'strict' JavaScript mode
'use strict';

// Configure the 'csps_store' module routes
angular.module('csps_store').config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
    when('/', {
      templateUrl: '/csps/store/views/csps_store.view.html'
    });
  }
]); 

