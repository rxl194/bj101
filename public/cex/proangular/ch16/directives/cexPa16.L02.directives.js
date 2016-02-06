// Invoke 'strict' JavaScript mode
'use strict';

var app = angular.module("cexPa16App");

app.directive("cexPa16UnorderedList", function () {
  return {
    link: function (scope, element, attrs) {
      var data = scope[attrs["cexPa16UnorderedList"] || attrs["listSource"]];
      var propertyExpression = attrs["listProperty"] || "price | currency";
      if (angular.isArray(data)) {
        var listElem = angular.element("<ul>");
        if (element[0].nodeName == "#comment") {
            element.parent().append(listElem);
        } else {
            element.append(listElem);
        }
        for (var i = 0; i < data.length; i++) {
          var itemElement = angular.element("<li>")
              .text(scope.$eval(propertyExpression, data[i]));
          listElem.append(itemElement);
        } 
      }
    },
    restrict: "EACM"
  }
});

