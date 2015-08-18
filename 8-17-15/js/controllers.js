app.controller("ChatController", ['$scope', '$location', '$http', function($scope, $location, $http){
	$scope.chat = "Chat!"
	$scope.url = $location.url();
	$http.get('https://shielded-peak-6345.herokuapp.com/').then(function(data) {
		$scope.chats = data
		console.log($scope.chats)
	}, function(response) {
		console.log("Houston, we have a problem")
	})
}])