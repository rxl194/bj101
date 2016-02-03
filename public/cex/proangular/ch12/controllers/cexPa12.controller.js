// Invoke 'strict' JavaScript mode
'use strict';

angular.module("cexPa12App")
.controller("cexPa12DefaultCtrl", function ($scope) {
  
  $scope.requireValue = true;
  $scope.matchPattern = new RegExp("^[a-z]");  
 
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
  
  $scope.addUserValidate = function (userDetails) {
    if (myForm.$valid) {
      $scope.message = userDetails.name
          + " (" + userDetails.email + ") ("
          + userDetails.agreed + ")";
    } else {
      $scope.showValidation = true;
    }
  }
  
  $scope.addUser = function (userDetails) {
    $scope.message = userDetails.name
        + " (" + userDetails.email + ") (" + userDetails.agreed + ")";
  }

  $scope.message = "Ready";  

  $scope.getError = function (error) {
    if (angular.isDefined(error)) {
      if (error.required) {
          return "Please enter a value";
      } else if (error.email) {
          return "Please enter a valid email address";
      }
    }
  }  
  
});
