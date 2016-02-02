// Invoke 'strict' JavaScript mode
'use strict';

// Create the 'cspsAdminProductsController' controller
angular.module('csps_admin')
.controller('cspsAdminProductsController', 
         ['$scope', 'Authentication', 'cspsProducts',
  function($scope,   Authentication,   cspsProducts) {

    // Create a new controller method for retrieving a list of cspsProducts
    $scope.find = function() {
	    // Use the cspsProducts 'query' method to send an appropriate GET request
      $scope.cspsProducts = cspsProducts.query();
    };
  }

]);

