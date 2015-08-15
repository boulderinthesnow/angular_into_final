app.controller("ProjectsController", ['$scope', '$location', function($scope, $location){
	$scope.projects = "Projects!"
	$scope.absUrl = $location.absUrl();
	console.log($scope.absUrl)
}])

app.controller("BioController", ['$scope', '$location', function($scope, $location){
	
	$scope.url = $location.url();
	console.log($scope.url)
	$scope.bio = "Bio! " + $scope.url
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
	$scope.divide = parseInt($routeParams.num1) / parseInt($routeParams.num2)
	$scope.url = $location.url()
	console.log($scope.divide)
}])