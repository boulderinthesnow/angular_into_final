var app = angular.module('carouselApp', [])

app.directive('gsCarouselMaker', function() {
  return {
    restrict: 'E',
    link: function(scope, element, attrs) {
      
      scope.image = scope.imageArray[0]
      var count = 0
      scope.scrollRight = function (param) {
        scope.image = param[count]
        count++
        if (count > param.length - 1) {
         count = 0
        } 
      };

      scope.scrollLeft = function (param) {
        console.log(count)
        scope.image = param[count]
        count--
        if (count < 0) {
         count = param.length - 1;
        }
      };
    },
    templateUrl: '../partials/carousel.html',
    scope: {
      imageArray: '=',
    }
  };
});

