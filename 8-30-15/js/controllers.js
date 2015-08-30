app.controller('ChatController', function($scope, $firebaseArray){
	var chatRef = new Firebase("https://radiant-torch-6315.firebaseio.com/chat")
	$scope.chat = $firebaseArray(chatRef)
	console.log($scope.chat)
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

