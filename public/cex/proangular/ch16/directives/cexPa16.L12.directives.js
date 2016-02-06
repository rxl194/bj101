// Invoke 'strict' JavaScript mode
'use strict';

var app = angular.module("cexPa16App");

app.directive("cexPa16UnorderedList", function () {
  return {
    link: function (scope, element, attrs) {
        scope.data = scope[attrs["cexPa16UnorderedList"]];
    }, 
    restrict: "A",
    templateUrl: function (elem, attrs) {
      return attrs["template"] == "table" ?
          "tableTemplate.html" : "itemTemplate.html";
    }
  }
});

