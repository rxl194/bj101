
'use strict';

angular.module('angularjs01P2_7minWorkout', []);

angular.module('angularjs01P2_appapp', 
  ['ngRoute', 'ngSanitize', 'mediaPlayer', 'ui.bootstrap', 'ngAnimate', 'angularjs01P2_7minWorkout'])
.config(function ($routeProvider, $sceDelegateProvider) {
  
  var partial_pre = '/cex/angularjs01/P2L2_C06/partials';
  $routeProvider.when('/start', { templateUrl: partial_pre+'/start.html' });
  $routeProvider.when('/workout', { templateUrl: partial_pre+'/workout.html', controller: 'AngularJs01P2WorkoutController' });
  $routeProvider.when('/finish', { templateUrl: partial_pre+'/finish.html' });
  $routeProvider.otherwise({ redirectTo: '/start' });
    
  $sceDelegateProvider.resourceUrlWhitelist([
    // Allow same origin resource loads.
    'self',
    'http://*.youtube.com/**']);
        
});



