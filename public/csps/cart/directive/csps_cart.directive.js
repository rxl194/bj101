// Invoke 'strict' JavaScript mode
'use strict';

// Create the 'csps_cart' service
angular.module('csps_cart')
.directive("cspsCartSummary", function (cspsCart) {
    return {
        restrict: "E",
        templateUrl: "/csps/cart/directive/csps_cart.directive.html",
        controller: function ($scope) {

            var cartData = cspsCart.getProducts(); 

            $scope.total = function () {
                var total = 0;
                for (var i = 0; i < cartData.length; i++) {
                    total += (cartData[i].price * cartData[i].count);
                }
                return total;
            }

            $scope.itemCount = function () {
                var total = 0;
                for (var i = 0; i < cartData.length; i++) {
                    total += cartData[i].count;
                }
                return total;
            }
        }
    };
});


