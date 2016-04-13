// Invoke 'strict' JavaScript mode
'use strict';

angular.module("cex_umdbm101")
.directive("cexUmdbm101UserMenu", function() {
  return {
    controller: 'cexUmdbm101UserMenuCtrl',
    templateUrl: '/cex/umdbm101/views/cex_umdbm101.ex8.usermenu.html'
  };
});
