var app = angular.module('carouselApp', [])

app.controller('CarouselController', ["$scope", function($scope){

}])

app.directive('gsCarouselMaker', function() {
  return {
    restrict: 'E',
    link: function(scope, element, attrs) {
      var count = 0
      
      scope.scrollRight = function (param) {
        console.log("scroll right clicked", count)
        scope.image = param[count]
        count++
        if (count > 2) {
         count = 0
        } 
      };

      scope.scrollLeft = function (param) {

        console.log("scroll left clicked", count)
        scope.image = param[count]
        count--

        if (count < 0) {
         count = 2;
        }
      };

       // scope.right = function(array) {
       //  array.push ("foo") 
       // }


    },
    templateUrl: '../partials/carousel.html',
    scope: {
      imageArray: '='
    }
  };
});

