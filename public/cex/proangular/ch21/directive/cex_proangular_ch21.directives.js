// Invoke 'strict' JavaScript mode
'use strict';

// Create the 'cex_proangular_ch21' module
angular.module('cex_proangular_ch21')
.directive("cexProangularCh21Increment", function () {
  return {
    restrict: "E",
    scope: {
      item: "=item",
      property: "@propertyName",
      restful: "@restful",
      method: "@methodName"
    },
    link: function (scope, element, attrs) {
        var button = angular.element("<button>").text("+");
        button.addClass("btn btn-primary btn-xs");
        element.append(button);
        button.on("click", function () {
            scope.$apply(function () {
              scope.item[scope.property]++;
              if (scope.restful) {
                  scope.item[scope.method]();
              }
            })
        })
    },
  }
});