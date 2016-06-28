'use strict';

angular.module('angularjs01P2_appapp', ['ngRoute', 'ngSanitize', 'angularjs01P2_7minWorkout','angularjs01P2_WorkoutBuilder', 'mediaPlayer', 'ui.bootstrap', 'LocalStorageModule', 'ngAnimate']).
config(function ($routeProvider, $sceDelegateProvider) {
  var partial_pre = '/cex/angularjs01/P2L3_C03/partials';
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
      controller: 'angularjs01P2WorkoutDetailController',
      resolve: {
        angularjs01P2SelectedWorkout: ['angularjs01P2WorkoutBuilderService', function (angularjs01P2WorkoutBuilderService) {
          return angularjs01P2WorkoutBuilderService.startBuilding();
        }],
      }
  });
  $routeProvider.when('/builder/workouts/:id', {
      templateUrl: partial_pre+'/workoutbuilder/workout.html',
      leftNav: partial_pre+'/workoutbuilder/left-nav-exercises.html',
      controller: 'angularjs01P2WorkoutDetailController',
      topNav: partial_pre+'/workoutbuilder/top-nav.html',
      resolve: {
        angularjs01P2SelectedWorkout: ['angularjs01P2WorkoutBuilderService', '$route', '$location', function (angularjs01P2WorkoutBuilderService, $route, $location) {
          var workout = angularjs01P2WorkoutBuilderService.startBuilding($route.current.params.id);
          if (!workout) {
            $location.path('/builder/workouts');    //If the workout not found redirect to workout list
          }
          return workout;
        }],
      }
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