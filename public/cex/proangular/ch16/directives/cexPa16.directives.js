// Invoke 'strict' JavaScript mode
'use strict';

var app = angular.module("cexPa16App");

app.directive("cexPa16UnorderedList", function () {
  return function (scope, element, attrs) {
    var data = scope[attrs["cexPa16UnorderedList"]];
    var propertyExpression = attrs["listProperty"];
    if (angular.isArray(data)) {
      var listElem = angular.element("<ul>");
      element.append(listElem);
      for (var i = 0; i < data.length; i++) {
        var itemElement = angular.element("<li>")
            .text(scope.$eval(propertyExpression, data[i]));
        listElem.append(itemElement);
      } 
    }
  }
});

