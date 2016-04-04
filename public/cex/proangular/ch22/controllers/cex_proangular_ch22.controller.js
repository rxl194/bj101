// Invoke 'strict' JavaScript mode
'use strict';

// Create the 'cex_proangular_ch21' module
angular.module('cex_proangular_ch21')
.constant("cexProangularCh21BaseUrl", "/api/ex/proangulars/ch21/")
.controller("cexProangularCh22Ctrl", [
  '$scope', '$http', '$resource', '$location', 'cexProangularCh21BaseUrl', 
  function($scope, $http, $resource, $location, baseUrl) {
    
    $scope.displayMode = "list";
    $scope.currentProduct = null;
    
    $scope.productsResource = $resource(baseUrl + ":id", { id: "@_id" },
      {'update' : {method: 'PUT'}});
//       { transformRequest: [], transformResponse: [] }

    $scope.listProducts = function () {
      $scope.products = $scope.productsResource.query();	
    };

    $scope.deleteProduct = function (product) {
      product.$delete().then(function () {
        $scope.products.splice($scope.products.indexOf(product), 1);
      });
      $location.path("/list");
    }

    $scope.createProduct = function (product) {
      product.description = "ex/proangulars/ch22/"
      new $scope.productsResource(product).$save().then(function(newProduct) {
        $scope.products.push(newProduct);
        $location.path("/list");
      });
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

    $scope.editroduct = function (product) {
        $scope.currentProduct = product;
        $location.path("/edit");
    }

    $scope.saveEdit = function (product) {
        if (angular.isDefined(product._id)) {
            $scope.updateProduct(product);
        } else {
            $scope.createProduct(product);
        }
        $scope.currentProduct = {};
    }

    $scope.cancelEdit = function () {
        $scope.currentProduct = {};
        $location.path("/list");
    }

    $scope.listProducts();    
    
  }
]);

