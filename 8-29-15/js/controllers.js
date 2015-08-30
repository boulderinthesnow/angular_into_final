app.controller('TodosController', function($scope, $firebaseArray){
	var todosRef = new Firebase("https://radiant-torch-6315.firebaseio.com/list")
	$scope.todos = $firebaseArray(todosRef)
	$scope.newTodo = {text: "", completed: false}

	$scope.addTodo = function() {
		$scope.todos.$add($scope.newTodo).then(function(){
			$scope.newTodo.text = ""		
		})
	}

	$scope.removeTodo = function(todo) {
		$scope.todos.$remove(todo)
	}


	$scope.crossTodo = function(todo) {

		var rec = $scope.todos.$getRecord(todo.$id)
		rec.completed = !rec.completed
		console.log(rec.completed)
	}
	// $scope.todos.$add({text: "Walk Rusty", completed: false})

});

