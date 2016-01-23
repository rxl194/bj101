// Invoke 'strict' JavaScript mode
'use strict';

// Create the 'cex_proangular' controller
angular.module('cex_proangular').controller('cexProangularController', ['$scope', 'Authentication',
	function($scope, Authentication) {
		// Expose the authentication service
		$scope.authentication = Authentication;
	}
]);

