var app = angular.module('pokemonApp', [])

app.controller('PokeController', ['$scope', '$http', '$q', function($scope, $http, $q) {
	$scope.pokeArr = [];
	$http.get('http://pokeapi.co/api/v1/pokedex/1/').
		then(function (response) {
			$scope.pokemons = response.data.pokemon
			$scope.CompleteArr = fiveRandPoke($scope.pokemons)
			// console.log($scope.pokeArr)
		}, function (response) {
			console.log("Ruh Roh")
		});

		var fiveRandPoke = function (data) {
			// console.log(data, 'data')
			arr = [];
			for (i = 0 ; arr.length < 5 ; i++) {
				var fivePoke = Math.floor(Math.random() * ($scope.pokemons.length -10))	
				if (fivePoke < 700) { 
					arr.push(fivePoke)
				}
			} // END FOR LOOP

			$q.all([
				$http.get('http://pokeapi.co/api/v1/pokemon/' + arr[0] + '/'),
				$http.get('http://pokeapi.co/api/v1/pokemon/' + arr[1] + '/'),
				$http.get('http://pokeapi.co/api/v1/pokemon/' + arr[2] + '/'),
				$http.get('http://pokeapi.co/api/v1/pokemon/' + arr[3] + '/'),
				$http.get('http://pokeapi.co/api/v1/pokemon/' + arr[4] + '/') 
			]).then( function (arrayOfResponses) {
				arrayOfResponses.forEach(function (pokemon) {
					var tempObj = {};
					pokemon = pokemon.data;
					tempObj.name = pokemon.name;
					
					//GET IMAGE
					var spriteAddress = ('http://pokeapi.co' + pokemon.sprites[0].resource_uri)
					var tempImage = parseInt((spriteAddress.split("/")[6])) - 1
					tempObj.image = 'http://pokeapi.co/media/img/' + tempImage + '.png'
					//PUSH TO ARRAY
					$scope.pokeArr.push(tempObj)
				})
				console.log($scope.pokeArr)
				// return ($scope.pokeArr)
			})
		} // END FUNCTION	
	}]);



app.directive('gsPokemonDetails', function() {
	return {
		templateUrl: '../partials/show-pokemon.html',
		scope: {
			pokemons: '='
		}
	}
}); 


// The app should display the pokemon's name, types, name of moves 
// (limit it to 6), and a sprite for the pokemon. Use a custom 
// directive to display the pokemon.