// Invoke 'strict' JavaScript mode
'use strict';

var now = new Date();
angular.module("cexPa09App")
.value("nowValue", now);

angular.module("cexPa09App.Services", [])
.service("cexPa09DaysSrcs", function(nowValue) {
  this.today = nowValue.getDay();
  this.tomorrow = (this.today + 1)%7;
})
.config(function() {
  console.log("cexPa09App.Services module config: (no time)");
})
.run(function (cexPa09AppStartTime) {
  console.log("cexPa09App.Services module run: " + cexPa09AppStartTime);
});
