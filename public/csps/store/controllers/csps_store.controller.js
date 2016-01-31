// Invoke 'strict' JavaScript mode
'use strict';

// Create the 'csps_store' controller
angular.module('csps_store').controller('cspsStoreController', 
           ['$scope', '$location', '$http', 'Authentication', 'cspsProducts', 'cspsCart',
  function($scope, $location, $http, Authentication, cspsProducts, cspsCart) {
    // Expose the Authentication service
    $scope.authentication = Authentication;
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

    $scope.sendOrder = function (shippingDetails) {
            var order = angular.copy(shippingDetails);
            var cartData = cspsCart.getProducts();
            order.cartData = JSON.stringify(cartData);
            $http({method: 'POST', url: '/api/sps/orders', data: order})
            .success( function(data) {
              $scope.data.orderId = data.id;
              cspsCart.getProducts().length = 0;
            })
            .error(function (error) {
              $scope.data.orderError = error;
            })
            .finally(function() {
              $location.path('csps/completeorder');
            });

// DOESN'T WORK FOR cspsOrders Service
      // Use the form fields to create a new order $resource object
      //var order = new cspsOrders(shippingDetails);
      //order.products = cspsCart.getProducts();

      // Use the article '$save' method to send an appropriate POST request
      //order.$promise['finally'](function() {
      //  $location.path("/complete");
      //}

      //order.$save(function(data) {
        // If an order was created successfully
        //$scope.data.orderId = data.id; 
        //cspsCart.getProducts().length = 0;
      //}, function(error) {
        // Otherwise, present the user with the error message
        //$scope.data.orderError = error;
      //});
// DOESN'T WORK FOR cspsOrders Service

    }
   
  }
]);

