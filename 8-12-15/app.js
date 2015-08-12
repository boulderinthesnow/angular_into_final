var app = angular.module("firstApp", []);

	
	app.controller("clickController", function($scope){
		var places = [];
		var showForm = false
		$scope.newPost = function() {
			$scope.showForm = true
		}
		$scope.saveForm = function(form) {
			$scope.showForm = false;
			// add data from post into an object and push it into places array
			places.push({
				title: form.title,
				author: form.author,
				image: form.image,
				description: form.description
			})
			}
	})