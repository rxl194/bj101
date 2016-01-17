// Invoke 'strict' JavaScript mode
'use strict';

// Create the 'Authentication' service
angular.module('cys_users').factory('Authentication', [
	function() {
		// Use the rendered user object
		this.user = window.cys_user;

		// Return the authenticated user data
		return {
			user: this.user
		};
	}
]);
