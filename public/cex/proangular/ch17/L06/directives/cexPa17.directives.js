// Invoke 'strict' JavaScript mode
'use strict';

var app = angular.module("cexPa17App");

app
.directive("triButton", function () {
  return {
    restrict: "E",
    replace: true,
    require: "ngModel",
    template: document.querySelector("#triTemplate").outerText,
    link: function (scope, element, attrs, ctrl) {
      var setSelected = function (value) {
        var buttons = element.find("button");
        buttons.removeClass("btn-primary");
        for (var i = 0; i < buttons.length; i++) {
          if (buttons.eq(i).text() == value) {
            buttons.eq(i).addClass("btn-primary");
          }
        }
      }
      setSelected(scope.dataValue);
    }
  }
});
