// Invoke 'strict' JavaScript mode
'use strict';

angular.module("cexPa010App")
.controller("cexPa10DefaultCtrl", function ($scope) {
  $scope.data = {};
  
  $scope.todos = [
    { action: "Get groceries", complete: false },
    { action: "Call plumber", complete: false },
    { action: "Buy running shoes", complete: true },
    { action: "Buy flowers", complete: false },
    { action: "Call family", complete: false }];
    
  $scope.viewFile = function() {
    return $scope.showList ? "L13_list.html" : "L11_table.html";    
  };

  $scope.reportChange = function () {
    console.log("Displayed content: " + $scope.viewFile());
  }  
});
