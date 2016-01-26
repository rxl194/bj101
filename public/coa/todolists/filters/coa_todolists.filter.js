// Invoke 'strict' JavaScript mode
'use strict';

// Create the 'coa_todolists' filter
angular.module('coa_todolists').filter('coaTodolistsCheckedItems', function() {
  return function(items, showComplete) {
    var resultArr = [];
    angular.forEach(items, function(item) {
      if (item.done == false || showComplete == true) {
        resultArr.push(item);
      }
    });
    return resultArr;
  }
});

