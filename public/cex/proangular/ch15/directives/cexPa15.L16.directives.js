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
        (function() {
          var itemElement = angular.element('<li>');
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
    var items = element.find("li");
    items.css("color", "red");
    for (var i = 0; i < items.length; i++) {
      if (items.eq(i).text() == "Oranges") {
        items.eq(i).css("font-weight", "bold");
      } else {
        items.eq(i).css("font-weight", "normal");        
      }
    }
    console.log("Element count: " + items.length);
    console.log("Font: " + items.css("font-weight"));    
  }
})