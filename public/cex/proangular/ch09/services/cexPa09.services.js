// Invoke 'strict' JavaScript mode
'use strict';

var now = new Date();
angular.module("cexPa09App")
.value("nowValue", now);

angular.module("cexPa09App")
.service("cexPa09DaysSrcs", function(nowValue) {
  this.today = nowValue.getDay();
  this.tomorrow = (this.today + 1)%7;
});
