var app = angular.module("firstApp", ['ngRoute']);
app.config(['$routeProvider', '$httpProvider',  function($routeProvider, $httpProvider) {
    // $httpProvider.defaults.withCredentials = true;
    $routeProvider
    //   .when('/', {
    //     templateUrl: '/index.html',
    //     controller: 'ContactController'
    //   })
      .when('/show/:id', {
        templateUrl: '/partials/show.html',
        controller: 'ShowController'
      })
  }])


