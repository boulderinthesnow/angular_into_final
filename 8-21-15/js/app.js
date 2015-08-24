var app = angular.module("teaApp", ['ngRoute']);
app.config(['$routeProvider', '$httpProvider', function($routeProvider, $httpProvider) {
    $routeProvider
      .when('/', {
        templateUrl: '/partials/show.html',
        controller: 'ShowController'
      })
      .when('/checkout', {
      	templateUrl: '/partials/checkout.html',
      	controller: 'ShoppingController'
      })
  }])

