var app = angular.module("firstApp", [
	'angularMoment'
	]);

	
	app.controller("clickController", function($scope){
		$scope.places = [
							{
								title: "Lake Tahoe", 
								author: "Matthew Williams", 
								image:"http://www.ironman.com/~/media/7b907617deea480a8b6a109d898f75e4/lake%20tahoe%20carousel2.jpg?w=1600&h=980&c=1", 
								description:" Wolf bespoke before they sold out, narwhal deep v craft beer paleo put a bird on it. Kickstarter swag cronut Schlitz pork belly. Cold-pressed sustainable irony, tattooed letterpress American Apparel brunch. Keytar literally crucifix heirloom +1, craft beer dreamcatcher fanny pack paleo brunch raw denim church-key fashion axe authentic. Letterpress gentrify cold-pressed, hella stumptown twee Odd Future. Vice Pinterest Portland Brooklyn. Pinterest organic polaroid retro.", 
								time: new Date(),
								rank: 0
							},
							{
								title: "Lake WoeBeGone", 
								author: "Matthew Williams", 
								image:"http://www.ironman.com/~/media/7b907617deea480a8b6a109d898f75e4/lake%20tahoe%20carousel2.jpg?w=1600&h=980&c=1", 
								description:" Wolf bespoke before they sold out, narwhal deep v craft beer paleo put a bird on it. Kickstarter swag cronut Schlitz pork belly. Cold-pressed sustainable irony, tattooed letterpress American Apparel brunch. Keytar literally crucifix heirloom +1, craft beer dreamcatcher fanny pack paleo brunch raw denim church-key fashion axe authentic. Letterpress gentrify cold-pressed, hella stumptown twee Odd Future. Vice Pinterest Portland Brooklyn. Pinterest organic polaroid retro.", 
								time: new Date(),
								rank: 0
							}
						];
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
				description: form.description,
				time: new Date(),
				rank: 0
			})
		}
		$scope.up = function(place) {
			place.rank += 1
		}
		$scope.down = function(place) {
			place.rank -= 1
		}
	})