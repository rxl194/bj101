'use strict';

angular.module('angularjs01P2_appapp')
.controller('AngularJs01P2RootController', ['$scope', '$modal', function ($scope, $modal) {
  $scope.showWorkoutHistory = function () {
    var dailog = $modal.open({
      templateUrl: 'partials/workout-history.html',
      controller: WorkoutHistoryController,
      size: 'lg'
    });
  };

  var WorkoutHistoryController = function ($scope, $modalInstance, angularJs01P2WorkoutHistoryTracker) {
    $scope.search = {};
    $scope.search.completed = '';
    $scope.history = angularJs01P2WorkoutHistoryTracker.getHistory();

    $scope.ok = function () {
        $modalInstance.close();
    };
  };
  WorkoutHistoryController['$inject'] = ['$scope', '$modalInstance', 'angularJs01P2WorkoutHistoryTracker'];
  
  $scope.$on('$routeChangeSuccess', function (e, current,previous) {
    $scope.currentRoute = current;
  });

}]);
