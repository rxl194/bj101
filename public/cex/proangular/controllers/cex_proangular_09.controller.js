// Invoke 'strict' JavaScript mode
'use strict';

angular.module("cex_proangular_09")
  .controller("cexProangula09DayCtrl", function($scope, cexPaDaysSrcs) {
    $scope.day = cexPaDaysSrcs.today;
    $scope.tomorrow = cexPaDaysSrcs.tomorrow;
  });
