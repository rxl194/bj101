// Invoke 'strict' JavaScript mode
'use strict';

// Create the 'csps_catprod' controller
// For category and product list relationship
angular.module('csps_store').controller('cspsCatProductController', 
           ['$scope', '$filter', 
  function($scope, $filter) {

    var selectedCategory = null;

    $scope.selectCategory = function (newCategory) {
      selectedCategory = newCategory;
    }

    $scope.categoryFilterFn = function (product) {
      return selectedCategory == null ||
        product.category == selectedCategory;
    }

  }
]);

