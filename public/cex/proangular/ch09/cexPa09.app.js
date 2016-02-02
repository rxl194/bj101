// Invoke 'strict' JavaScript mode
'use strict';

// Set the main application name
var mainApplicationModuleName = 'cexPa09App';

// Create the main application
var mainApplicationModule = angular.module(mainApplicationModuleName, ['cexPa09App.Services']);

// Configure the hashbang URLs using the $locationProvider services 
mainApplicationModule
.constant("cexPa09AppStartTime", new Date().toLocaleTimeString())
.config(['$locationProvider', 'cexPa09AppStartTime',
	function($locationProvider, cexPa09AppStartTime) {
		$locationProvider.hashPrefix('!');
    console.log("Main module config: " + cexPa09AppStartTime);
	}
])
.run(function(cexPa09AppStartTime){
  console.log("Main module run: " + cexPa09AppStartTime);
});

// Fix Facebook's OAuth bug
if (window.location.hash === '#_=_') window.location.hash = '#!';

// Manually bootstrap the AngularJS application
angular.element(document).ready(function() {
//	angular.bootstrap(document, [mainApplicationModuleName]);
});

