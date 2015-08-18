app.controller("MovieController", ['$scope', '$location', '$http', function($scope, $location, $http){
	$scope.chat = "Chat!"
	$scope.url = $location.url();
	
	$scope.searchDb = function () {
		var searchUrl = 'http://www.omdbapi.com/?t=' + $scope.searchData
		$http.get(searchUrl).then(function(res) {
			$scope.movieResults = res.data
			console.log($scope.movieResults)
		}, function(response) {
			console.log("Houston, we have a problem")
		})
	}

}]);