app.controller('TodosController', function($scope, $firebaseArray){
	var todosRef = new Firebase("https://radiant-torch-6315.firebaseio.com/list")
	$scope.todos = $firebaseArray(todosRef)
	$scope.newTodo = {text: "", completed: false}

	$scope.addTodo = function() {
		$scope.todos.$add($scope.newTodo).then(function(){
			$scope.newTodo.text = ""		
		})
	
	}

	// $scope.todos.$add({text: "Walk Rusty", completed: false})

});

