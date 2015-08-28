var app = angular.module('carouselApp', [])

app.controller('CarouselController', ["$scope", function($scope){

}])

app.directive('gsCarouselMaker', function() {
  return {
    restrict: 'E',
    link: function(scope, element, attrs) {
      scope.scrollRight = function (param) {
        console.log("scroll right clicked", param)
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

