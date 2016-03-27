// Invoke 'strict' JavaScript mode
'use strict';

// Create the 'cex_proangular_ch21' module
angular.module('cex_proangular_ch21')
.directive("cexProangularCh21Increment", function () {
  return {
    restrict: "E",
    scope: {
        value: "=value"
    },
    link: function (scope, element, attrs) {
        var button = angular.element("<button>").text("+");
        button.addClass("btn btn-primary btn-xs");
        element.append(button);
        button.on("click", function () {
            scope.$apply(function () {
                scope.value++;
            })
        })
    },
  }
});