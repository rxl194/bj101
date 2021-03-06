'use strict';

angular.module('angularjs01P2_WorkoutBuilder')
.controller('angularjs01P2ExercisesNavController',
         ['$scope', 'angularjs01P2SharedWorkoutService', 'angularjs01P2WorkoutBuilderService',
function ( $scope,   angularjs01P2SharedWorkoutService,   angularjs01P2WorkoutBuilderService) {

  $scope.addExercise = function (exercise) {
    angularjs01P2WorkoutBuilderService.addExercise(exercise);
  }

  var init = function () {
    $scope.exercises = angularjs01P2SharedWorkoutService.getExercises();
  };
  init();
}]);

angular.module('angularjs01P2_WorkoutBuilder')
.controller('angularjs01P2ExerciseListController',
        ['$scope', 'angularjs01P2SharedWorkoutService', '$location',
function ($scope,   angularjs01P2SharedWorkoutService,   $location) {
  $scope.goto = function (exercise) {
    $location.path('/builder/exercises/' + exercise.name);
  }
  var init = function () {
    $scope.exercises = angularjs01P2SharedWorkoutService.getExercises();
  };
  init();
}]);