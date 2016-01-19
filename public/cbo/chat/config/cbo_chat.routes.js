// Invoke 'strict' JavaScript mode
'use strict';

// Configure the 'chat' module routes
angular.module('cbo_chat').config(['$routeProvider',

function($routeProvider) {
  $routeProvider.
  when('/cbo/chat', {
    templateUrl: 'cbo/chat/views/cbo_chat.view.html'
  });
}

]); 
