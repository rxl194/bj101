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

    $scope.selectedOrder;

    $scope.selectOrder = function (order) {
      $scope.selectedOrder = order;
      $scope.selectedOrder.products = JSON.parse(order.cartData);
    };

    $scope.calcTotal = function (order) {
      var total = 0;
      for (var i = 0; i < order.cartData.length; i++) {
        total +=
            order.cartData[i].count * order.cartData[i].price;
      }
      return total;
    }    
  }
]);

