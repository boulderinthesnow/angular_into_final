var app = angular.module("movieApp", ["ngRoute"]);
app.config(["$routeProvider", "$httpProvider", function(a, b) {
  a.when("/", {templateUrl:"/partials/show.html", controller:"MovieController"}).when("/show/:query", {templateUrl:"/partials/show.html", controller:"MovieController"}).when("/movie/:query", {templateUrl:"/partials/movie.html", controller:"OneMovieController"});
}]);