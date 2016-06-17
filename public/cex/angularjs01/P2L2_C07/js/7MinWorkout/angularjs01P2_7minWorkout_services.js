'use strict';

/* Services */

angular.module('angularjs01P2_7minWorkout')
.value("angularJs01P2AppEvents", {
  workout: { exerciseStarted: "event:workout:exerciseStarted" }
})
.factory('angularJs01P2WorkoutHistoryTracker', 
           ['$rootScope', 'angularJs01P2AppEvents', 'localStorageService',
  function ($rootScope,    angularJs01P2AppEvents,   localStorageService) {

  var maxHistoryItems = 20   //We only track for last 20 exercise
  , storageKey = "angularJs01P2Workouthistory"
  , workoutHistory = localStorageService.get(storageKey) || []
  , currentWorkoutLog = null
  , service = {};

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
   localStorageService.add(storageKey, workoutHistory);
  };
  
  $rootScope.$on(angularJs01P2AppEvents.workout.exerciseStarted, function (e, args) {
    currentWorkoutLog.lastExercise = args.title;
    ++currentWorkoutLog.exercisesDone;
    localStorageService.add(storageKey, workoutHistory);
  });  

  $rootScope.$on("$routeChangeSuccess", function (e, args) {
   if (currentWorkoutLog) {
     service.endTracking(false); // End the current tracking if in progress the route changes.
   }
  });
  
  service.endTracking = function (completed) {
    currentWorkoutLog.completed = completed;
    currentWorkoutLog.endedOn = new Date().toISOString();
    currentWorkoutLog = null;
    localStorageService.add(storageKey, workoutHistory);
  };

  service.getHistory = function () {
    return workoutHistory;
  }  

  return service;
}]);
 