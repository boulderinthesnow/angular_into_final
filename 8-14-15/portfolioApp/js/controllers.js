app.controller("ProjectsController", ['$scope', '$location', function($scope, $location){
	$scope.projects = "Projects!"
	var url = $location.url();
	console.log(url)
}])

app.controller("BioController", ['$scope', '$location', function($scope, $location){
	$scope.bio = "Bio!"
	var url = $location.url();
	console.log(url)
}])

app.controller("ResumeController", ['$scope', '$location', function($scope, $location){
	$scope.resume = "Resume!"
	var url = $location.url();
	console.log(url)
}])