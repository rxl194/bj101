// Invoke 'strict' JavaScript mode
'use strict';

// Create the 'example' controller
angular.module('example').controller('ExampleController', ['$scope', 'Authentication',
	function($scope, Authentication) {
		// Get the user's 'fullName' 
		$scope.name = Authentication.cys_user ? Authentication.cys_user.fullName : 'BJ Application';
	}
]);
