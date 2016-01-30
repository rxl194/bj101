// Invoke 'strict' JavaScript mode
'use strict';

// Create the 'csps_admin' controller
angular.module('csps_admin')
.controller('cspsAdminMainController', 
         ['$scope', '$window', 'Authentication', 
  function($scope, $window, Authentication) {

    var viewPath = '/csps/admin/views/';

    $scope.screens = ["Products", "Orders"];
    $scope.current = $scope.screens[0];

    $scope.setScreen = function (index) {
      $scope.current = $scope.screens[index];
    };

    $scope.getScreen = function () {
      return $scope.current == "Products"
        ? viewPath + "csps_admin.products.view.html" : viewPath + "csps_admin.orders.view.html";
    };
  }

]);

