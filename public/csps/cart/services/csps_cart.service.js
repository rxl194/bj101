// Invoke 'strict' JavaScript mode
'use strict';

// Create the 'csps_cart' service
angular.module('csps_cart')
.factory('cspsCart', ['$resource', function($resource) {

  var cartData = [];

  return {
    addProduct: function (id, name, price) {
      var addedToExistingItem = false;
      for (var i = 0; i < cartData.length; i++) {
        if (cartData[i].id == id) {
          cartData[i].count++;
          addedToExistingItem = true;
          break;
        }
      }
      if (!addedToExistingItem) {
        cartData.push({
          count: 1, id: id, price: price, name: name
        });
      }
    },

    removeProduct: function (id) {
      for (var i = 0; i < cartData.length; i++) {
        if (cartData[i].id == id) {
          cartData.splice(i, 1);
          break;
        }
      }
    },

    getProducts: function () {
      return cartData;
    }
  }

}]);

