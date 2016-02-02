// Invoke 'strict' JavaScript mode
'use strict';

angular.module("cexPa09App")
.filter("cexPaDaynames", function() {
  var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday",
    "Thursday", "Friday", "Saturday"
  ];
  return function(input) {
    return angular.isNumber(input) ? dayNames[input] : input;
  };
});
