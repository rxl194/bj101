// Invoke 'strict' JavaScript mode
'use strict';

// Create the 'csps_store' controller
angular.module('csps_store').controller('cspsStoreController', 
           ['$scope', '$location', 'Authentication', 'cspsProducts', 'cspsOrders', 'cspsCart',
  function($scope, $location, Authentication, cspsProducts, cspsOrders, cspsCart) {
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
      order.products = cspsCart.getProducts();

      $http.post(orderUrl, order)
      .success(function (data) {
        $scope.data.orderId = data.id;
        cart.getProducts().length = 0;
      })
      .error(function (error) {
          $scope.data.orderError = error;
      })
      .finally(function () {
          $location.path("/complete");
      });
    }
   
  }
]);

