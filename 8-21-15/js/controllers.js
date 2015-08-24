app.controller("ShowController", ['$scope', '$http', 'ShoppingCart', function($scope, $http, ShoppingCart){
	 var showAllTea = function () {
		$http.get('http://localhost:8000/json/data.json').then(function(data) {
			$scope.teaArray = data.data
		}
		, function(response) {
			console.log("ruh roh...")
		})	// END FUNCTION
	}() // END FUNCTION

	$scope.addToBag = function (tea) {
		ShoppingCart.shoppingCart.push(tea)
		console.log(ShoppingCart.shoppingCart)
	} // END FUNCTION

}]) // END CONTROLLER


app.controller("ShoppingController", ['$scope', '$ShoppingCart', function($scope, $ShoppingCart){
	// $scope.addTea({
	// 	name: 
	// })
}]) // END CONTROLLER
