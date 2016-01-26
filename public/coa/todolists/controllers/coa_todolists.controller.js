// Invoke 'strict' JavaScript mode
'use strict';

var model = {
  items: []
};

// Create the 'coa_todolists' controller
angular.module('coa_todolists').run( function($http) {
  $http.get("/coa/todolists/json/todo.json").success( function(data) {
    model.items = data;
  });
});

angular.module('coa_todolists').controller('coaTodolistsController', [
          '$scope', 'Authentication', 'coaTodolists',
  function($scope,   Authentication, coaTodolists) {
    // Expose the authentication service
    $scope.authentication = Authentication;
    // $scope.todo = window.model;
    $scope.todo = model;

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

