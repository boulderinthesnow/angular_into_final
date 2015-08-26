var app = angular.module('pokemonApp', [])

app.controller('PokeController', ['$scope', '$http', function($scope, $http) {
	$http.get('http://pokeapi.co/api/v1/pokedex/1/').
		then(function (response) {
			$scope.pokemons = response.data.pokemon
		}, function (response) {
			console.log("Ruh Roh")
		});

  // $scope.pokemons = [{name: 'Duncan Metal Drifter',
		// 	    img: "http://www.toysrus.com/graphics/tru_prod_images/Duncan-Metal-Drifter-Pro-Yo-Yo--pTRU1-8444206dt.jpg"},
		// 	    {name: 'Bad Ass',
		// 	    img: "http://yoyobestbuy.com/wp-content/uploads/Bad-Ass-3.jpg"},
		// 	    {name: 'Pretty yoyo',
		// 	    img: "https://s-media-cache-ak0.pinimg.com/736x/72/e1/fa/72e1fa89c1efea5ea12e719fae83efa4.jpg"}
		// 		];
		// 		console.log($scope.pokemons[0].name)
}]);


app.directive('gsPokemonDetails', function() {
	return {
		templateUrl: '../partials/show-pokemon.html',
		scope: {
			pokemons: '=pokemonData'
		}
	}
}); 
