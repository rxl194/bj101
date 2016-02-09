// Invoke 'strict' JavaScript mode
'use strict';

var app = angular.module("cexPa17App");

app.directive("panel", function () {
  return {
    link: function (scope, element, attrs) {
      scope.dataSource = "directive";
    },
    restrict: "E",
    scope: true,
    template: function () {
      return angular.element(
        document.querySelector("#template")).html();
    },
    transclude: true
  }
});
