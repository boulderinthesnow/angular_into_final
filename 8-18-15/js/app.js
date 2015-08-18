var app = angular.module("movieApp", ['ngRoute']);
app.config(function($routeProvider, $httpProvider) {
    // $httpProvider.defaults.withCredentials = true;
    $routeProvider
      .when('/', {
        templateUrl: '/partials/results.html',
        controller: 'MovieController'
      })
  })
