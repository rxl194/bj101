// Invoke 'strict' JavaScript mode
'use strict';

// Create the 'cex_meanbook' controller
angular.module('cex_meanbook').controller('cexMeanBookController', ['$scope', 'Authentication',
	function($scope, Authentication) {
		// Expose the authentication service
		$scope.authentication = Authentication;
	}
]);

