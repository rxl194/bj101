'use strict';

angular.module('angularjs01P2_WorkoutBuilder')
.controller('angularjs01P2WorkoutListController',
        ['$scope', 'angularjs01P2SharedWorkoutService', '$location',
function ($scope,   angularjs01P2SharedWorkoutService,   $location) {
  $scope.goto = function (workout) {
    $location.path('/builder/workouts/' + workout.name);
  }
  var init = function () {
    $scope.workouts = angularjs01P2SharedWorkoutService.getWorkouts();
  };
  init();
}]);
