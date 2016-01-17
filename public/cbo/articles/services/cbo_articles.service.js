// Invoke 'strict' JavaScript mode
'use strict';

// Create the 'articles' service
angular.module('cbo_articles').factory('cboArticles', ['$resource', function($resource) {
  // Use the '$resource' service to return an article '$resource' object
    return $resource('api/bo/articles/:articleId', {
        articleId: '@_id'
    }, {
        update: {
            method: 'PUT'
        }
    });
}]);

