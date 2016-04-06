// Invoke 'strict' JavaScript mode
'use strict';
// Create the 'cex_proangular_ch21' module
angular.module('cex_proangular_ch21')
.constant("cexProangularCh21BaseUrl", "/api/ex/proangulars/ch21/")
.factory("cexProangularCh22ProductsResource", [
  '$resource', 'cexProangularCh21BaseUrl',
  function ($resource, baseUrl) {
    return $resource(baseUrl + ":id", { id: "@_id" },
        {'update' : {method: 'PUT'}});
      //       { transformRequest: [], transformResponse: [] }
  }
])
.controller("cexProangularCh22Ctrl", [
  '$scope', '$http', '$resource', '$location', '$route', '$routeParams', 'cexProangularCh22ProductsResource', 
  function($scope, $http, $resource, $location, $route, $routeParams, productsResource) {
    
    $scope.data = {};

    $scope.createProduct = function (product) {
      product.description = "ex/proangulars/ch22/"
      new productsResource(product).$save().then(function(newProduct) {
        $scope.data.products.push(newProduct);
        $location.path("/list");
      });
    }

    $scope.deleteProduct = function (product) {
      product.$delete().then(function () {
        $scope.data.products.splice($scope.data.products.indexOf(product), 1);
      });
      $location.path("/list");
    }      
  }
])
.controller("cexProangularCh22TableCtrl", [
  '$scope', '$location', '$route', 'data',
  function ($scope, $location, $route, data) {
    $scope.data.products = data;
    console.log("products: " + $scope.data.products);
    $scope.refreshProducts = function () {
      $route.reload();
    }
  }
])
.controller("cexProangularCh22EditCtrl",  [
  '$scope', '$routeParams', '$location',
  function ($scope, $routeParams, $location) {

    $scope.currentProduct = null;    

    if ($location.path().indexOf("/edit/") == 0) {
      var id = $routeParams["id"];
      for (var i = 0; i < $scope.data.products.length; i++) {
        if ($scope.data.products[i]._id == id) {
          $scope.currentProduct = $scope.data.products[i];
          break;
        }
      }
    }

    $scope.cancelEdit = function () {
      $location.path("/list");
    }    

    $scope.updateProduct = function (product) {
      product.$update();
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