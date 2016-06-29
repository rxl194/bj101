/// <reference path="services.js" />
'use strict';

/* Services */
angular.module('angularjs01P2_WorkoutBuilder')
.factory("angularjs01P2WorkoutBuilderService",
         ['angularjs01P2SharedWorkoutService', 'Angularjs01P2WorkoutPlan', 'Angularjs01P2Exercise',
 function (angularjs01P2SharedWorkoutService,   Angularjs01P2WorkoutPlan,   Angularjs01P2Exercise) {
  var service = {};
  var buildingWorkout;
  var newWorkout;
  service.startBuilding = function (name) {
    //We are going to edit an existing workout
    if (name) {
        buildingWorkout = angularjs01P2SharedWorkoutService.getWorkout(name);
        newWorkout = false;
    }
    else {
        buildingWorkout = new Angularjs01P2WorkoutPlan({});
        newWorkout = true;
    }
    return buildingWorkout;
  };

  service.removeExercise = function (exercise) {
    buildingWorkout.exercises.splice(buildingWorkout.exercises.indexOf(exercise), 1);
  };

  service.addExercise = function (exercise) {
    buildingWorkout.exercises.push({ details: exercise, duration: 30 });
  };

  service.moveExerciseTo = function (exercise, toIndex) {
    if (toIndex < 0 || toIndex >= buildingWorkout.exercises) return;
    var currentIndex = buildingWorkout.exercises.indexOf(exercise);
    buildingWorkout.exercises.splice(toIndex, 0, buildingWorkout.exercises.splice(currentIndex, 1)[0]);
  }

  return service;
}]);

