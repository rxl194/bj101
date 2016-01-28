// Invoke 'strict' JavaScript mode
'use strict';

// Create the 'cspsOrder' service
angular.module('csps_cart').factory('cspsOrders', ['$resource', function($resource) {
  // Use the '$resource' service to return an order '$resource' object
    return $resource('api/sps/orders/:orderId', {
        articleId: '@_id'
    }, {
        update: {
            method: 'PUT'
        }
    });
}]);

