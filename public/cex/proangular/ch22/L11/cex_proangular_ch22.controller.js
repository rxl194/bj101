// Invoke 'strict' JavaScript mode
'use strict';
// Create the 'cex_proangular_ch21' module
angular.module('cex_proangular_ch21')
.constant("cexProangularCh21BaseUrl", "/api/ex/proangulars/ch21/")
.controller("cexProangularCh22Ctrl", [
  '$scope', '$http', '$resource', '$location', '$route', '$routeParams', 'cexProangularCh21BaseUrl', 
  function($scope, $http, $resource, $location, $route, $routeParams, baseUrl) {
    $scope.productsResource = $resource(baseUrl + ":id", { id: "@_id" },
      {'update' : {method: 'PUT'}});
//       { transformRequest: [], transformResponse: [] }

    $scope.listProducts = function () {
      $scope.products = $scope.productsResource.query();	
    };

    $scope.createProduct = function (product) {
      product.description = "ex/proangulars/ch22/"
      new $scope.productsResource(product).$save().then(function(newProduct) {
        $scope.products.push(newProduct);
        $location.path("/list");
      });
    }

    $scope.deleteProduct = function (product) {
      product.$delete().then(function () {
        $scope.products.splice($scope.products.indexOf(product), 1);
      });
      $location.path("/list");
    }    

    $scope.listProducts();    
  }
])
.controller("cexProangularCh22EditCtrl",  [
  '$scope', '$routeParams', '$location',
  function ($scope, $routeParams, $location) {

    $scope.currentProduct = null;    

    if ($location.path().indexOf("/edit/") == 0) {
      var id = $routeParams["id"];
      for (var i = 0; i < $scope.products.length; i++) {
        if ($scope.products[i]._id == id) {
          $scope.currentProduct = $scope.products[i];
          break;
        }
      }
    }

    $scope.cancelEdit = function () {
      if ($scope.currentProduct && $scope.currentProduct.$get) {
          $scope.currentProduct.$get();
      }      
      $scope.currentProduct = {};
      $location.path("/list");
    }    

    $scope.updateProduct = function (product) {
      for (var i = 0; i < $scope.products.length; i++) {
        if ($scope.products[i]._id == product._id) {
          $scope.products[i] = product;
          product.$update();
          break;
        }
      }
      $location.path("/list");
    }    

    $scope.saveEdit = function (product) {
      if (angular.isDefined(product._id)) {
        $scope.updateProduct(product);
      } else {
        $scope.createProduct(product);
      }
      $scope.currentProduct = {};
    }    

  }
]);