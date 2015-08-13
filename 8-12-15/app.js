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
								rank: 0,
								showComment: false,
								comments: []

							},
							{
								title: "Lake WoeBeGone", 
								author: "Matthew Williams", 
								image:"http://www.ironman.com/~/media/7b907617deea480a8b6a109d898f75e4/lake%20tahoe%20carousel2.jpg?w=1600&h=980&c=1", 
								description:"DIY post-ironic Helvetica cred. Lo-fi lomo direct trade keytar meh put a bird on it. Typewriter Helvetica American Apparel, butcher lo-fi dreamcatcher migas. Ethical seitan Intelligentsia, photo booth brunch cornhole messenger bag. Tilde sustainable iPhone Godard heirloom tattooed Brooklyn, disrupt fap. Pitchfork bitters 3 wolf moon stumptown letterpress. Letterpress normcore butcher tousled retro pour-over.", 
								time: new Date(),
								rank: 0,
								showComment: false,
								comments: []
							}
						];
		var showForm = false
		$scope.newPost = function() {
			$scope.showForm = true;
		}
		$scope.saveForm = function(form) {
			if ($scope.placeForm.$valid) {
				$scope.showForm = false;
				$scope.places.push({
					title: form.title,
					author: form.author,
					image: form.image,
					description: form.description,
					time: new Date(),
					rank: 0,
					showComment: false,
					comments: []
				})
			}
		}
		$scope.newComment = function(place) {
				place.showComment = true;
		}
		$scope.saveComment = function(comment, place) {
				place.showComment = false;
				place.comments.push({
					author: comment.author,
					comment: comment.text
				})
				console.log(place.comments.length)
		}
		$scope.up = function(place) {
			place.rank += 1
		}
		$scope.down = function(place) {
			place.rank -= 1
		}
	})