// Invoke 'strict' JavaScript mode
'use strict';

// Create the 'cex_proangular' controller
angular.module('cex_proangular').filter('cexProangularCheckedItems', function() {
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

