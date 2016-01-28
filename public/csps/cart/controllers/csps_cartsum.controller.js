// Invoke 'strict' JavaScript mode
'use strict';

// Create the 'csps_cartsum' controller
// Handle Cart Summary
angular.module('csps_cart').controller('cspsCartSumController', 
  function($scope, $filter, cspsCart) {

    var cartData = cspsCart.getProducts();
    $scope.cartData = cartData;

    $scope.total = function () {
      var total = 0;
      for (var i = 0; i < cartData.length; i++) {
        total += (cartData[i].price * cartData[i].count);
      }
      return total;
    }

    $scope.remove = function (id) {
      cspsCart.removeProduct(id);
    }
  }
);

