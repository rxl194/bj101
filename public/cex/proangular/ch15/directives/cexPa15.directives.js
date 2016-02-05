// Invoke 'strict' JavaScript mode
'use strict';

var app = angular.module("cexPa15App");

app.directive("cexPa15UnorderedList", function () {
  return function (scope, element, attrs) {
    var data = scope[attrs["cexPa15UnorderedList"]];
    var propertyName = attrs["listProperty"];    
    if (angular.isArray(data)) {
      var listElem = angular.element("<ul>");
      element.append(listElem);      
      for (var i = 0; i < data.length; i++) {
        // console.log("Item: " + data[i].name);
        listElem.append(angular.element('<li>').text(data[i].name));          
        // listElem.append(angular.element('<li>').text(data[i][propertyName]);
      }
    }
  }
});

