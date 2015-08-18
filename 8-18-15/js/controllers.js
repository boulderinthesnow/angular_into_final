app.controller("MovieController", ['$scope', '$location', '$http', function($scope, $location, $http){

	$scope.searchDb = function () {
		var searchUrl = 'http://www.omdbapi.com/?s=' + $scope.searchData
		// $location.path('/')
		console.log(searchUrl)
		$http.get(searchUrl).then(function(res) {
			$scope.movieResults = res.data.Search
			console.log($scope.movieResults)
			
		}, function(response) {
			console.log("Houston, we have a problem")
		})
	}
}]);

// encodeURIComponent($routeParams)
