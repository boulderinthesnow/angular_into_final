var app = angular.module("firstApp", []);


	app.controller("clickController", function($scope){
		var showForm = false
		$scope.newPost = function() {
			$scope.showForm = true
		}
		
	})