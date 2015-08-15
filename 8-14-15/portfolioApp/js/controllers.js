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
	$scope.add = parseInt($routeParams.num1) + parseInt($routeParams.num2)
	$scope.url = $location.url()
	console.log($scope.add)
	// parts = {
	// 	"vars" : {}
	// };
	// absUrl = $location.absUrl();
	// parts["hashString"] = (absUrl.split("#"))[1];
	// parts["pathString"] = (absUrl.split("/"));
	// console.log(parts["pathString"])

}])