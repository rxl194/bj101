// Invoke 'strict' JavaScript mode
'use strict';

angular.module("cex_proangular_09")
.directive("cexpahighlight", function($filter) {
  var dayFilter = $filter("cexPaDaynames");

  return function(scope, element, attrs) {
    if (dayFilter(scope.day) == attrs["cexpahighlight"]) {
      element.css("color", "red");
    }
  }
});
