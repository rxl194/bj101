// Invoke 'strict' JavaScript mode
'use strict';

// Create the 'csps_store' controller
angular.module('csps_store').controller('cspsStoreController', 
           ['$scope', '$location', 'Authentication', 'cspsProducts',
  function($scope, $location, Authentication, cspsProducts) {
    // Expose the Authentication service
    $scope.authentication = Authentication;
    $scope.pathCspsCatProdView = '/csps/products/views/csps_catproduct.view.html';
    $scope.pathExProangularSps = '/ex/proangular/sportsstore';

    // Create a new controller method for retrieving a list of products
    $scope.find = function() {
      // Use the csps_products 'query' method to send an appropriate GET request
      $scope.data = { };

//      $scope.data.products = cspsProducts.query();
      cspsProducts.query(function(data) {
        $scope.data.products = data;
      }, function(error) {
        $scope.data.error = error;
      });

    };
  }
]);

