// Invoke 'strict' JavaScript mode
'use strict';

// Create the 'cspsAdminProductsController' controller
angular.module('csps_admin')
.controller('cspsAdminProductsController', 
         ['$scope', 'Authentication', 'cspsProducts',
  function($scope,   Authentication,   cspsProducts) {

    // Create a new controller method for retrieving a list of cspsProducts
    $scope.find = function() {
      // Use the cspsProducts 'query' method to send an appropriate GET request
      $scope.cspsProducts = cspsProducts.query();
    };

    $scope.deleteCspsProduct = function (cspsProduct) {
      if (cspsProduct) {
        // Use the cspsProducts '$remove' method to delete the cspsProduct
        cspsProduct.$remove(function() {
          // Remove the cspsProduct from the cspsProducts list
          $scope.cspsProducts.splice($scope.cspsProducts.indexOf(cspsProduct), 1);
        });
      }
    }

    $scope.createCspsProduct = function (product) {
      // Use the form fields to create a new cspsProducts $resource object
      var cspsProduct = new cspsProducts(product);

      // Use the cspsProducts '$save' method to send an appropriate POST request
      cspsProduct.$save(function(newCspsProduct) {
        $scope.cspsProducts.push(newCspsProduct);
        $scope.editedCspsProduct = null;

      }, function(errorResponse) {
        // Otherwise, present the user with the error message
        // $scope.error = errorResponse.data.message;
      });
    }

    $scope.updateCspsProduct = function (cspsProduct) {
      cspsProduct.$update(function() {
        $scope.editedCspsProduct = null;
      }, function(errorResponse) {
        // Otherwise, present the user with the error message
        // $scope.error = errorResponse.data.message;
      });
    }

    $scope.startEdit = function (product) {
      $scope.editedProduct = product;
    }

    $scope.cancelEdit = function () {
      $scope.editedProduct = null;
    }
  }

]);

