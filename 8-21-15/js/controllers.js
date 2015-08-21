app.controller("ShowController", ['$scope', '$http', function($scope, $http){
	// function showAllTea() {
		$http.get('http://localhost:8000/json/data.json').then(function(data) {
			console.log(data, "FOO")
		})
		// , function(response) {
		// 	console.log("ruh roh...")
		// })
		
	// }() // END FUNCTION
}])


// $http.get('http://localhost:8000/json/itunes.json').then(function(data) {
// 	$scope.songs = data.data.results
// 	console.log($scope.songs)
// })