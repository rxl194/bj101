// Invoke 'strict' JavaScript mode
'use strict';

// Create the 'csps_store' controller
angular.module('csps_store').controller('cspsStoreController', 
           ['$scope', '$location', 'Authentication', 'cspsProducts',
  function($scope, $location, Authentication, cspsProducts) {
    // Expose the Authentication service
    $scope.authentication = Authentication;

    // Create a new controller method for retrieving a list of products
    $scope.find = function() {
      // Use the csps_products 'query' method to send an appropriate GET request
      $scope.data = { };
      $scope.data.products = cspsProducts.query();

//      $scope.data.products = [
//            { name: "Product #1", description: "A product",
//                category: "Category #1", price: 100 },
//            { name: "Product #2", description: "A product",
//                category: "Category #1", price: 110 },
//            { name: "Product #3", description: "A product",
//                category: "Category #2", price: 210 },
//            { name: "Product #4", description: "A product",
//                category: "Category #3", price: 202 }
//      ];
    };
  }
]);

