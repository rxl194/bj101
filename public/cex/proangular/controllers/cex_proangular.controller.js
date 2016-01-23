// Invoke 'strict' JavaScript mode
'use strict';

// Create the 'cex_proangular' controller
angular.module('cex_proangular').controller('cexProangularController', ['$scope', 'Authentication',
  function($scope, Authentication) {
    // Expose the authentication service
    $scope.authentication = Authentication;
    $scope.todo = window.model;

    $scope.incompleteCount = function() {
      var count = 0;
      angular.forEach($scope.todo.items, function(item) {
        if (!item.done) {
          count++
        }
      });
      return count;
    }

    $scope.warningLevel = function () {
      return $scope.incompleteCount() < 3 ? "label-success" : "label-warning";
    }            

    $scope.addNewItem = function (actionText) {
      $scope.todo.items.push({ action: actionText, done: false });
    }


  }
]);

