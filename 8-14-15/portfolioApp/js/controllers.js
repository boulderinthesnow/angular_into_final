app.controller("ProjectsController", ['$scope', '$location', function($scope, $location){
	$scope.projects = "Projects!"
	$scope.absUrl = $location.absUrl();
	console.log($scope.absUrl)
}])

app.controller("BioController", ['$scope', '$location', '$http', function($scope, $location, $http){
	
	$scope.url = $location.url();
	console.log($scope.url)
	$scope.bio = "Bio! " + $scope.url
	// $http.get('https://api.github.com/zen').then(function(data) {
	// 	$scope.zenData = data.data
	// 	console.log("foo")
	// })
	$http.get('http://localhost:8000/json/itunes.json').then(function(data) {
		$scope.songs = data.data.results
		console.log($scope.songs)
	})
}])

app.controller("ResumeController", ['$scope', '$location', function($scope, $location){
	$scope.resume = "Resume!"
	$scope.url = $location.url();
	console.log($scope.url)
}])

app.controller("AddController", ['$scope', '$location', '$routeParams', function($scope, $location, $routeParams){
	// $scope.add = parseInt($routeParams.num1) + parseInt($routeParams.num2)
	// $scope.url = $location.url()
	num1 = parseInt($location.$$search.x);
	num2 = parseInt($location.$$search.y);
	$scope.add = (num1 + num2);
}])

app.controller("DivideController", ['$scope', '$location', '$routeParams', function($scope, $location, $routeParams){
	// $scope.divide = parseInt($routeParams.num1) / parseInt($routeParams.num2)
	// $scope.url = $location.url()
	// console.log($scope.divide)
	num1 = parseInt($location.$$search.x);
	num2 = parseInt($location.$$search.y);
	$scope.divide = (num1 / num2);
}])
