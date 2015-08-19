app.controller("MovieController", ['$scope', '$location', '$http', function($scope, $location, $http){

	$scope.showMovie = function (title) {
		$location.path('/movie')
		console.log(title)
		var searchUrl = 'http://www.omdbapi.com/?t=' + encodeURIComponent(title)
		$http.get(searchUrl).then(function(res) {
			$scope.movieResults = res.data.Search
			console.log($scope.movieResults)
			
		}, function(response) {
			console.log("Houston, we have a problem")
		})
	}

	$scope.searchDb = function () {
		var searchUrl = 'http://www.omdbapi.com/?s=' + encodeURIComponent($scope.searchData)
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

app.controller("SearchController", ['$scope', '$location', '$http', function($scope, $location, $http){

	console.log($scope.searchData)
	$scope.searchDb = function () {
		$location.path('/show/' + $scope.searchData)
	}

}]);

