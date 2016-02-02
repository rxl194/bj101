// Invoke 'strict' JavaScript mode
'use strict';

// Create the 'csps_products' service
angular.module('csps_products').factory('cspsProducts', ['$resource', function($resource) {
  // Use the '$resource' service to return an article '$resource' object
    return $resource('/api/sps/products/:productId', {
        productId: '@_id'
    }, {
        update: {
            method: 'PUT'
        }
    });
}]);

