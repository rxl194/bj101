// Invoke 'strict' JavaScript mode
'use strict';

var app = angular.module("cexPa15App");

app.directive("cexPa15UnorderedList", function () {
  return function (scope, element, attrs) {
    var data = scope[attrs["cexPa15UnorderedList"]];
    var propertyExpression = attrs["listProperty"];    
    if (angular.isArray(data)) {
      var listElem = angular.element("<ul>");
      element.append(listElem);      
      for (var i = 0; i < data.length; i++) {
        var itemElement = angular.element('<li>');
        listElem.append(itemElement);
        var watcherFn = function (watchScope) {
          return watchScope.$eval(propertyExpression, data[i]);
        }
        scope.$watch(watcherFn, function (newValue, oldValue) {
          itemElement.text(newValue);
        });
      }
    }
  }
});

