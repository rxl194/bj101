// Invoke 'strict' JavaScript mode
'use strict';

// Create the 'coaTodolists' service
angular.module('coa_todolists').factory('coaTodolists', ['$resource', function($resource) {
  // Use the '$resource' service to return an article '$resource' object
  return $resource('/api/oa/todolists/:todolistId', {
    articleId: '@_id'
  }, {
    update: {
      method: 'PUT'
    }
  });
}]);

