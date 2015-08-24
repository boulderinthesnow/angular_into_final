app.controller("ShowController", ['$scope', '$http', 'ShoppingCart', '$location', function($scope, $http, ShoppingCart, $location){
	 var showAllTea = function () {
		$http.get('http://localhost:8000/json/data.json').then(function(data) {
			$scope.teaArray = data.data
		}
		, function(response) {
			console.log("ruh roh...")
		})	// END FUNCTION
	}() // END FUNCTION

	$scope.addToBag = function (tea) {
		ShoppingCart.addTea(tea)
		console.log(ShoppingCart.shoppingCart)
	} // END FUNCTION

	$scope.checkout = function () {
		$location.path('/checkout')
	}

}]) // END CONTROLLER


app.controller("ShoppingController", ['$scope', 'ShoppingCart', '$http', function($scope, ShoppingCart, $http){
	$scope.editBox = false
	$scope.teaArray = ShoppingCart.shoppingCart

	$scope.totalFunction = function () {
		$scope.total = $scope.teaArray.map(function(tea) {
			console.log(tea.quantity * tea.price, "IHBVLIBVHIUVHJIUVJKGVJK")
			return tea.quantity * tea.price
		})
		.reduce(function(x,y) {return x+y})
	}()

	$scope.edit = function () {
		console.log("foo")
		console.log($scope.editBox)
		$scope.editBox = false
	
	}

	$scope.updateTotal = function () {
		console.log("a little closer")
		$scope.total = $scope.teaArray.map(function(tea) {
					console.log(tea.quantity * tea.price, "IHBVLIBVHIUVHJIUVJKGVJK")
					return tea.quantity * tea.price
				})
				.reduce(function(x,y) {return x+y})
	}

}]) // END CONTROLLER
