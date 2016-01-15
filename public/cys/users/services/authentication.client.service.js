// Invoke 'strict' JavaScript mode
'use strict';

// Create the 'Authentication' service
angular.module('cys_users').factory('Authentication', [
	function() {
		// Use the rendered user object
		this.cys_user = window.cys_user;

		// Return the authenticated user data
		return {
			cys_user: this.cys_user
		};
	}
]);
