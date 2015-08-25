var app = angular.module('simpleDirectiveApp', [])
app.directive('gsAngularLogo', function() {
  return {
  	restrict: "E",
    templateUrl: 'partials/tim.html'
  };
});

