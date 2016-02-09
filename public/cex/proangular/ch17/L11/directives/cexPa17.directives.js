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
      
      var validateParser = function (value) {
        var valid= (value == "Yes" || value == "No");
        ctrl.$setValidity("confidence", valid);
        return valid ? value : undefined;
      }

      ctrl.$parsers.push(validateParser);      
      
      ctrl.$formatters.push(function (value) {
        return value == "Huh?" ? "Not Sure" : value;
      });      

      element.on("click", function (event) {
        setSelected(event.target.innerText);
        scope.$apply(function () {
            ctrl.$setViewValue(event.target.innerText);
        });
      });
    
      var setSelected = function (value) {
        var buttons = element.find("button");
        buttons.removeClass("btn-primary");
        for (var i = 0; i < buttons.length; i++) {
          if (buttons.eq(i).text() == value) {
            buttons.eq(i).addClass("btn-primary");
          }
        }
      }
      
      ctrl.$render = function () {
          validateParser(ctrl.$viewValue);
          setSelected(ctrl.$viewValue || "Not Sure");
      }
    }
  }
});
