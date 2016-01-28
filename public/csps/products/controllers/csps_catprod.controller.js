// Invoke 'strict' JavaScript mode
'use strict';

// Create the 'csps_catprod' controller
// For category and product list relationship
angular.module('csps_products')
.constant("productListActiveClass", "btn-primary")
.constant("productListPageCount", 3)
.controller('cspsCatProductController', 
  function($scope, $filter, cspsCart,
           productListActiveClass, productListPageCount) {

    var selectedCategory = null;

    $scope.selectedPage = 1;
    $scope.pageSize = productListPageCount;

    $scope.selectCategory = function (newCategory) {
      selectedCategory = newCategory;
      $scope.selectedPage = 1;
    }

    $scope.selectPage = function (newPage) {
      $scope.selectedPage = newPage;
    }

    $scope.categoryFilterFn = function (product) {
      return selectedCategory == null ||
        product.category == selectedCategory;
    }

    $scope.getCategoryClass = function (category) {
      return selectedCategory == category ? productListActiveClass : "";
    }

    $scope.getPageClass = function (page) {
      return $scope.selectedPage == page ? productListActiveClass : "";
    }

    $scope.addProductToCart = function (product) {
      cspsCart.addProduct(product.id, product.name, product.price);
    }

  }

);

