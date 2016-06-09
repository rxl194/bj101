
'use strict';

angular.module('angularjs01P2_7minWorkout', []);

angular.module('angularjs01P2_appapp', ['ngRoute', 'angularjs01P2_7minWorkout'])
.config(function ($routeProvider) {
    var partial_pre = '/cex/angularjs01/P2_C04/partials';
    $routeProvider.when('/start', { templateUrl: partial_pre+'/start.html' });
    $routeProvider.when('/workout', { templateUrl: partial_pre+'/workout.html', controller: 'AngularJs01P2WorkoutController' });
    $routeProvider.when('/finish', { templateUrl: partial_pre+'/finish.html' });
    $routeProvider.otherwise({ redirectTo: '/start' });
});



