'use strict';

/* Services */

angular.module('angularjs01P2_7minWorkout')
.value("angularJs01P2AppEvents", {
  workout: { exerciseStarted: "event:workout:exerciseStarted" }
})
.factory('angularJs01P2WorkoutHistoryTracker', 
           ['$rootScope', 'angularJs01P2AppEvents',
  function ($rootScope, angularJs01P2AppEvents) {

  var maxHistoryItems = 20;   //Track for last 20 exercise
  var workoutHistory = [];
  var currentWorkoutLog = null;
  var service = {};

  service.startTracking = function () {
   currentWorkoutLog = {
     startedOn: new Date().toISOString(),
     completed: false,
     exercisesDone: 0
   };
   if (workoutHistory.length >= maxHistoryItems) {
     workoutHistory.shift();
   }
   workoutHistory.push(currentWorkoutLog);
  };

  service.endTracking = function (completed) {
   currentWorkoutLog.completed = completed;
   currentWorkoutLog.endedOn = new Date().toISOString();
   currentWorkoutLog = null;
  };

  service.getHistory = function () {
   return workoutHistory;
  }
  
  $rootScope.$on(angularJs01P2AppEvents.workout.exerciseStarted, function (e, args) {
    currentWorkoutLog.lastExercise = args.title;
    ++currentWorkoutLog.exercisesDone;
  });  

  $rootScope.$on("$routeChangeSuccess", function (e, args) {
   if (currentWorkoutLog) {
     service.endTracking(false); // End the current tracking if in progress the route changes.
   }
  });

  return service;
}]);
 