// Invoke 'strict' JavaScript mode
'use strict';

// Create the 'cex_proangular_ch21' module
angular.module('cex_proangular_ch21')
.constant("cexProangularCh21BaseUrl", "/api/ex/proangulars/ch21/")
.controller("cexProangularCh21Ctrl", [
  '$scope', '$http', '$resource', 'cexProangularCh21BaseUrl', 
  function($scope, $http, $resource, baseUrl) {
    
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
      $scope.displayMode = "list";
    }

    $scope.createProduct = function (product) {
      product.description = "ex/proangulars/ch21/"
      new $scope.productsResource(product).$save().then(function(newProduct) {
        $scope.products.push(newProduct);
        $scope.displayMode = "list";
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
        $scope.displayMode = "list";
    }

    $scope.editOrCreateProduct = function (product) {
        $scope.currentProduct =
            product ? angular.copy(product) : {};
        $scope.displayMode = "edit";
    }

    $scope.saveEdit = function (product) {
        if (angular.isDefined(product._id)) {
            $scope.updateProduct(product);
        } else {
            $scope.createProduct(product);
        }
    }

    $scope.cancelEdit = function () {
        $scope.currentProduct = {};
        $scope.displayMode = "list";
    }

    $scope.listProducts();    
    
  }
]);

