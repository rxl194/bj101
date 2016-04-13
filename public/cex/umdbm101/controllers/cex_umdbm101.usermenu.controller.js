// Invoke 'strict' JavaScript mode
'use strict';

angular.module('cex_umdbm101')
.controller('cexUmdbm101UserMenuCtrl', [
  '$scope', 'Authentication',
  function($scope, Authentication) {
    // Expose the Authentication service
    $scope.authentication = Authentication;
  }
]);

