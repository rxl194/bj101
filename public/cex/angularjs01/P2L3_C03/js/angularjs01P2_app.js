'use strict';

angular.module('angularjs01P2_appapp', ['ngRoute', 'ngSanitize', 'angularjs01P2_7minWorkout','angularjs01P2_WorkoutBuilder', 'mediaPlayer', 'ui.bootstrap', 'LocalStorageModule', 'ngAnimate']).
config(function ($routeProvider, $sceDelegateProvider) {
  var partial_pre = '/cex/angularjs01/P2L3_C02/partials';
  $routeProvider.when('/start', { templateUrl: partial_pre+'/start.html' });
  $routeProvider.when('/workout', { templateUrl: partial_pre+'/workout.html', controller: 'AngularJs01P2WorkoutController' });
  $routeProvider.when('/finish', { templateUrl: partial_pre+'/finish.html' });

  $routeProvider.when('/builder', {
      redirectTo: '/builder/workouts'
  });
  $routeProvider.when('/builder/workouts', {
      templateUrl: partial_pre+'/workoutbuilder/workouts.html',
      leftNav: partial_pre+'/workoutbuilder/left-nav-main.html',
      topNav: partial_pre+'/workoutbuilder/top-nav.html',
      controller: 'angularjs01P2WorkoutListController'
  });
  $routeProvider.when('/builder/exercises', {
      templateUrl: partial_pre+'/workoutbuilder/exercises.html',
      leftNav: partial_pre+'/workoutbuilder/left-nav-main.html',
      topNav: partial_pre+'/workoutbuilder/top-nav.html',
      controller: 'angularjs01P2ExerciseListController'
  });
  $routeProvider.when('/builder/workouts/new', {
      templateUrl: partial_pre+'/workoutbuilder/workout.html',
      leftNav: partial_pre+'/workoutbuilder/left-nav-exercises.html',
      topNav: partial_pre+'/workoutbuilder/top-nav.html',
  });
  $routeProvider.when('/builder/workouts/:id', {
      templateUrl: partial_pre+'/workoutbuilder/workout.html',
      leftNav: partial_pre+'/workoutbuilder/left-nav-exercises.html',
      topNav: partial_pre+'/workoutbuilder/top-nav.html',
  });
  $routeProvider.when('/builder/exercises/new', { templateUrl: partial_pre+'/workoutbuilder/exercise.html' });
  $routeProvider.when('/builder/exercises/:id', { templateUrl: partial_pre+'/workoutbuilder/exercise.html' });


  $routeProvider.otherwise({ redirectTo: '/start' });

  $sceDelegateProvider.resourceUrlWhitelist([
    // Allow same origin resource loads.
    'self',
    // Allow loading from our assets domain.  Notice the difference between * and **.
    'http://*.youtube.com/**']);
});

angular.module('angularjs01P2_7minWorkout', []);
angular.module('angularjs01P2_WorkoutBuilder', []);