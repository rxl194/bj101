'use strict';

/* directives */
angular.module('angularjs01P2_appapp')
.directive('ngConfirm', [function () {
  return {
    restrict: 'A',
    link: function (scope, element, attrs) {
      element.bind('click', function () {
        var message = attrs.ngConfirmMessage || 'Are you sure?';
        if (message && confirm(message)) {
          scope.$apply(attrs.ngConfirm);
        }
      });
    }
  }
}]);
