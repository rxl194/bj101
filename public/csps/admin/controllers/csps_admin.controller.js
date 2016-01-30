// Invoke 'strict' JavaScript mode
'use strict';

// Create the 'csps_admin' controller
angular.module('csps_admin')
.controller('cspsAdminController', 
         ['$scope', '$window', 'Authentication', 

  function($scope, $window, Authentication) {
    $scope.authentication = Authentication;
    $scope.admin_user = $window.admin_user;
  }

]);

