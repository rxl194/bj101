// Invoke 'strict' JavaScript mode
'use strict';

angular.module("cexPa09App")
.controller("cexPa09DayCtrl", function ($scope, cexPa09DaysSrcs) {
  $scope.day = cexPa09DaysSrcs.today;
})
.controller("cexPa09TomorrowCtrl", function ($scope, cexPa09DaysSrcs) {
  $scope.day = cexPa09DaysSrcs.tomorrow;
});
