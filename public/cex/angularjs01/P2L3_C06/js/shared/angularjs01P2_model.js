﻿'use strict';

/* Model classes */
angular.module('angularjs01P2_appapp')
.factory('Angularjs01P2Exercise', function () {
  function Angularjs01P2Exercise(args) {
    this.name = args.name;
    this.title = args.title;
    this.description = args.description;
    this.image = args.image;
    this.related = {};
    this.related.videos = args.videos;
    this.nameSound = args.nameSound;
    this.procedure = args.procedure;
  }
  return Angularjs01P2Exercise;
});

angular.module('angularjs01P2_appapp')
.factory('Angularjs01P2WorkoutPlan', function () {
  function Angularjs01P2WorkoutPlan(args) {
    this.exercises = [];
    this.name = args.name;
    this.title = args.title;
    this.description = args.description;
    this.restBetweenExercise = args.restBetweenExercise;
  };
  Angularjs01P2WorkoutPlan.prototype.totalWorkoutDuration = function () {
    if (this.exercises.length == 0) return 0;
    var total = 0;
    angular.forEach(this.exercises, function (exercise) {
        total = total + (exercise.duration ? exercise.duration : 0);
    });
    return (this.restBetweenExercise ? this.restBetweenExercise : 0) * (this.exercises.length - 1) + total;
  }
  return Angularjs01P2WorkoutPlan;
});
