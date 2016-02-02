// Invoke 'strict' JavaScript mode
'use strict';

angular.module("cex_proangular_09")
.service("cexPaDaysSrcs", function() {
  this.today = new Date().getDay();
  this.tomorrow = (this.today + 1)%7;
});
