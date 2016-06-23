'use strict';

angular.module('angularjs01P2_7minWorkout')
.controller('AngularJs01P2WorkoutVideosController', ['$scope', '$modal', function ($scope, $modal) {
  $scope.playVideo = function (videoId) {
    $scope.pauseWorkout();
    var dailog = $modal.open({
      templateUrl: 'youtube-modal',
      controller: VideoPlayerController,
      scope:$scope.$new(true),
      resolve: {
        AngularJs01P2WorkoutVideos: function () {  
          return '//www.youtube.com/embed/' + videoId;
        }
      },
      size: 'lg'
    }).result['finally'](function () {
      $scope.resumeWorkout();
    });
  };

  var VideoPlayerController = function ($scope, $modalInstance, AngularJs01P2WorkoutVideos) {
    $scope.video = AngularJs01P2WorkoutVideos;
    $scope.ok = function () {
      $modalInstance.close();
    };
  };
  VideoPlayerController['$inject'] = ['$scope', '$modalInstance', 'AngularJs01P2WorkoutVideos'];

  var init = function () {
  };
  init();
}]);