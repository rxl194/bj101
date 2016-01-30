// Invoke 'strict' JavaScript mode
'use strict';

// Create the 'csps_admin' controller
angular.module('csps_admin')
.controller('cspsAdminOrdersController', 
         ['$scope', 'Authentication', 'cspsOrders',
  function($scope,   Authentication,   cspsOrders) {

    // Create a new controller method for retrieving a list of orders
    $scope.find = function() {
	    // Use the cspsOrders 'query' method to send an appropriate GET request
      $scope.orders = cspsOrders.query();
    };

  }
]);

