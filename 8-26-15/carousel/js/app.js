var app = angular.module('carouselApp', [])

app.controller('CarouselController', ["$scope", function($scope){
}])

app.directive('gsCarouselMaker', function() {
  return {
    restrict: 'E',
    link: function(scope, element, attrs) {
      scope.image = scope.imageArray[0]
      var count = 0
      scope.scrollRight = function (param) {
        count++
        scope.image = param[count]
        if (count > param.length - 1) {
         count = 0
        } 
      };

      scope.scrollLeft = function (param) {
        count--
        scope.image = param[count]
        if (count < 0) {
         count = 2;
        }
      };

    },
    templateUrl: '../partials/carousel.html',
    scope: {
      imageArray: '=' 
    }
  };
});

