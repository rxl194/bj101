// Invoke 'strict' JavaScript mode
'use strict';

// Create the 'coa_todolists' controller
angular.module('coa_todolists').controller('coaTodolistsController', ['$scope', 'Authentication', 
    function($scope, Authentication) {
    	// Expose the Authentication service
        $scope.authentication = Authentication;

        // Create a new controller method for retrieving a list of articles
        $scope.find = function() {
        	// Use the article 'query' method to send an appropriate GET request
            $scope.articles = Articles.query();
        };
    }
]);

