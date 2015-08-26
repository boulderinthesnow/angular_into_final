var app = angular.module('mouseOverDirectiveApp', [])

app.directive('gsChangeBackground', function() {
  return {
    scope: {
      colorChange: '@hoverData'
    },

    link: function(scope, element, attrs) {
      console.log(scope.colorChange)
      if (!scope.colorChange) {
        scope.colorChange = 'blue'
      };
      console.log(scope.colorChange)

      var oldColor = element.css('background-color');

      element.on('mouseenter', function(event) {
        element.css('background-color', scope.colorChange);
      });

      element.on('mouseleave', function(event) {
        element.css('background-color', oldColor);
      })
    }, 
    restrict : 'A'
  };
});



































