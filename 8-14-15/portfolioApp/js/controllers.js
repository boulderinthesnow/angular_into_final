app.controller("ProjectsController", ['$scope', '$location', function($scope, $location){
	$scope.projects = "Projects!"
	$scope.url = $location.url();
	console.log($scope.url)
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