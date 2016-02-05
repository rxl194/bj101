// Invoke 'strict' JavaScript mode
'use strict';

var app = angular.module("cexPa15App");

app.directive("cexPa15UnorderedList", function () {
  return function (scope, element, attrs) {
    var data = scope[attrs["cexPa15UnorderedList"]];
    var propertyExpression = attrs["listProperty"];    
    if (angular.isArray(data)) {
      var listElem = angular.element("<ul>").appendTo(element);
      element.append(listElem);      
      for (var i = 0; i < data.length; i++) {
        (function() {
          var itemElement = angular.element("<li>").appendTo(listElem);
          listElem.append(itemElement);
          var index = i;
          var watcherFn = function (watchScope) {
            return watchScope.$eval(propertyExpression, data[index]);
          }
          scope.$watch(watcherFn, function (newValue, oldValue) {
            itemElement.text(newValue);
          });
        }());
      }
    }
  }
});

app.directive("cexPa15DemoDirective", function () {
  return function (scope, element, attrs) {
    var listElem = angular.element("<ol>");
    element.append(listElem);
    for (var i = 0; i < scope.names.length; i++) {
      listElem.append(angular.element("<li>")
        .append(angular.element("<span>").text(scope.names[i])));
    }    
    var buttons = element.find("button");
    buttons.on("click", function (e) {
        element.find("li").toggleClass("bold");
    });    
  }
})