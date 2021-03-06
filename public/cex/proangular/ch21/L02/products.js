angular.module("exampleApp", [])
.constant("baseUrl", "/api/sps/products/")
.controller("defaultCtrl", function ($scope, $http, baseUrl) {

    $scope.displayMode = "list";
    $scope.currentProduct = null;
	
    $scope.listProducts = function () {
		console.log("baseUrl: " + baseUrl);
        $http.get(baseUrl, function(response){
		  console.log(response.statusCode);
		  var body = '';
		  response.on('data', function(chunk) {
			body += chunk;
		  });

		  response.on('end', function() {
			var data = JSON.parse(body)
			console.log(data);
		  });
		});
	}		

    $scope.deleteProduct = function (product) {
        $scope.products.splice($scope.products.indexOf(product), 1);
    }

    $scope.createProduct = function (product) {
        $scope.products.push(product);
        $scope.displayMode = "list";
    }

    $scope.updateProduct = function (product) {
        for (var i = 0; i < $scope.products.length; i++) {
            if ($scope.products[i].id == product.id) {
                $scope.products[i] = product;
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
        if (angular.isDefined(product.id)) {
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
});
