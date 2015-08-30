app.controller('ChatController', function($scope, $firebaseArray){
	var chatRef = new Firebase("https://radiant-torch-6315.firebaseio.com/chat")
	$scope.chats = $firebaseArray(chatRef)
	$scope.newChat = {name: "", avatar:"", text: ""}
	// $scope.edit = true
	$scope.addChat = function() {
		$scope.chats.$add($scope.newChat).then(function(){
			$scope.newChat = {name: "", avatar:"", text: ""} 
		})
		console.log($scope.chats)
	}

	$scope.removeChat = function(chat) {
		$scope.chats.$remove(chat)
	}

	$scope.editChat = function(chat) {
		console.log(chat)
		$scope.edit = !$scope.edit
	}

	// $scope.todos = $firebaseArray(todosRef)
	// $scope.newTodo = {text: "", completed: false}

	// $scope.addTodo = function() {
	// 	$scope.todos.$add($scope.newTodo).then(function(){
	// 		$scope.newTodo.text = ""		
	// 	})
	// }

	// $scope.removeTodo = function(todo) {
	// 	$scope.todos.$remove(todo)
	// }


	// $scope.crossTodo = function(todo) {

	// 	var rec = $scope.todos.$getRecord(todo.$id)
	// 	rec.completed = !rec.completed
	// 	console.log(rec.completed)
	// }
	// $scope.todos.$add({text: "Walk Rusty", completed: false})

});

