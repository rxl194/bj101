// Invoke 'strict' JavaScript mode
'use strict';

angular.module("cexPa010App")
.controller("cexPa10DefaultCtrl", function ($scope) {
  $scope.todos = [
    { action: "Get groceries", complete: false },
    { action: "Call plumber", complete: false },
    { action: "Buy running shoes", complete: true },
    { action: "Buy flowers", complete: false },
    { action: "Call family", complete: false }];
});
