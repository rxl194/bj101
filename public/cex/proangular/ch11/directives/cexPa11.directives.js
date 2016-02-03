// Invoke 'strict' JavaScript mode
'use strict';

angular.module("cexPa011App")
.directive("cexpatap", function() {


  return function(scope, elem, attrs) {
    elem.on("touchstart touchend click", function () {
      scope.$apply(attrs["cexpatap"]);
    }); 
  }
});
