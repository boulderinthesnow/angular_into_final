
app.controller('TodosController', function($scope, $firebaseArray){
	var todosRef = new Firebase("https://radiant-torch-6315.firebaseio.com/list")
	$scope.todos = $firebaseArray(todosRef)
});

