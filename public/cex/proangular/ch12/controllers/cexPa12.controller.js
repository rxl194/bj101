// Invoke 'strict' JavaScript mode
'use strict';

angular.module("cexPa12App")
.controller("cexPa12DefaultCtrl", function ($scope) {
 
  $scope.todos = [
    { action: "Get groceries", complete: false },
    { action: "Call plumber", complete: false },
    { action: "Buy running shoes", complete: true },
    { action: "Buy flowers", complete: false },
    { action: "Call family", complete: false }];

  $scope.addNewItem = function (newItem) {
    if (angular.isDefined(newItem)&& angular.isDefined(newItem.action)
            && angular.isDefined(newItem.location)) {    
      $scope.todos.push({
        action: newItem.action + " (" + newItem.location + ")",
        complete: false
      });
    }
  };    
});
