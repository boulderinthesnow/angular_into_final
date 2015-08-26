var app = angular.module('carouselApp', [])

app.directive('gsCarouselMaker', function() {
  var foo = '<h1>BEST CAROUSEL EVER</h1>'
  return {
    restrict: 'E',
    template: foo

    // scope: {
    //   colorChange: '@hoverData'
    // },

    // link: function(scope, element, attrs) {
    //   console.log(scope.colorChange)
    //   if (!scope.colorChange) {
    //     scope.colorChange = 'blue'
    //   };
    //   console.log(scope.colorChange)

    //   var oldColor = element.css('background-color');

    //   element.on('mouseenter', function(event) {
    //     element.css('background-color', scope.colorChange);
    //   });

    //   element.on('mouseleave', function(event) {
    //     element.css('background-color', oldColor);
    //   })
    // }, 
    // restrict : 'A'
  };
});

