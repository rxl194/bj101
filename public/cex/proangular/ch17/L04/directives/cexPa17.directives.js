// Invoke 'strict' JavaScript mode
'use strict';

var app = angular.module("cexPa17App");

app
.directive("productItem", function () {
  return {
    template: document.querySelector("#productTemplate").outerText,
    require: "^productTable",
    link: function (scope, element, attrs, ctrl) {
      scope.$watch("item.quantity", function () {
        ctrl.updateTotal();
      });
    }    
  }
})
.directive("productTable", function () {
  return {
    transclude: true,
    scope: { value: "=productTable", data: "=productData" },
    controller: function ($scope, $element, $attrs) {
      this.updateTotal = function() {
        var total = 0;
        for (var i = 0; i < $scope.data.length; i++) {
            total += Number($scope.data[i].quantity);
        }
        $scope.value = total;
      }
    }    
  }
});
