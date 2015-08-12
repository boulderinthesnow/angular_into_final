var app = angular.module("firstApp", []);

	
	app.controller("clickController", function($scope){
		$scope.places = [];
		var showForm = false
		$scope.newPost = function() {
			$scope.showForm = true
		}
		$scope.saveForm = function(form) {
			console.log(form);
			$scope.showForm = false;
			// DONE add data from post into an object and push it into places array
			$scope.places.push({
				title: form.title,
				author: form.author,
				image: form.image,
				description: form.description
			})
		}
	})