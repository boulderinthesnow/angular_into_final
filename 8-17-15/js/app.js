var app = angular.module("chatApp", ['ngRoute']);
app.config(function($routeProvider, $httpProvider) {
    // $httpProvider.defaults.withCredentials = true;
    $routeProvider   
      .when('/', {
        templateUrl: '/partials/chat.html',
        controller: 'ChatController'
      })
  })