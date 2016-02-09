// Invoke 'strict' JavaScript mode
'use strict';

var app = angular.module("cexPa17App");

app
.directive("productItem", function () {
  return {
    template: document.querySelector("#productTemplate").outerText
  }
})
.directive("productTable", function () {
  return {
    transclude: true,
    scope: { value: "=productTable", data: "=productData" },
  }
});
