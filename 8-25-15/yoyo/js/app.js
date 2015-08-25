var app = angular.module('yoyoDirectiveApp', [])

app.controller('YoyoController', ['$scope', function($scope) {
  $scope.yoyos = [{name: 'Duncan Metal Drifter',
			    img: "http://www.toysrus.com/graphics/tru_prod_images/Duncan-Metal-Drifter-Pro-Yo-Yo--pTRU1-8444206dt.jpg"},
			    {name: 'Bad Ass',
			    img: "http://yoyobestbuy.com/wp-content/uploads/Bad-Ass-3.jpg"},
			    {name: 'Pretty yoyo',
			    img: "https://s-media-cache-ak0.pinimg.com/736x/72/e1/fa/72e1fa89c1efea5ea12e719fae83efa4.jpg"}
				];
				console.log($scope.yoyos[0].name)
}]);

app.directive('gsYoyoDetails', function() {
  return {
    templateUrl: '../partials/yoyo-details.html',
    scope: {
    	yoyos: '=yoyoData'
    }
  };
});


