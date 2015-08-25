var app = angular.module('pokemonApp', [])

app.directive('gsPokemonItem', function() {
	return {
		templateUrl: 'partials/show-pokemon.html'
	}
}) 


// app.directive('gsAngularLogo', function() {
//   return {
//   	restrict: "E",
//     templateUrl: 'partials/tim.html'
//   };
// });

