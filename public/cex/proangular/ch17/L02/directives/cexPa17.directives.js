// Invoke 'strict' JavaScript mode
'use strict';

var app = angular.module("cexPa17App");

app
.directive("cexPa17SimpleRepeater", function () {
  return {
    scope: {
        data: "=source",
        propName: "@itemName"
    },
    transclude: 'element',
    compile: function (element, attrs, transcludeFn) {
      return function ($scope, $element, $attr) {
        $scope.$watch("data.length", function () {
          var parent = $element.parent();
          parent.children().remove();
          for (var i = 0; i < $scope.data.length; i++) {
            var childScope = $scope.$new();
            childScope[$scope.propName] = $scope.data[i];
            transcludeFn(childScope, function (clone) {
                parent.append(clone);
            });
          }
        });
      }
    }
  }
});
