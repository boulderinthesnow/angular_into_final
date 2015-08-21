app.controller("ShowController", ['$scope', '$http', function($scope, $http){
	 var showAllTea = function () {
		$http.get('http://localhost:8000/json/data.json').then(function(data) {
			$scope.teaArray = data.data
		}
		, function(response) {
			console.log("ruh roh...")
		})	// END FUNCTION
	}() // END FUNCTION
}]) // END CONTROLLER


// {"_id":"55c8ee82152165d244b98300","name":"Bayard stew",
// "ingredients":"concentrated gluten, jewelry, dill, beetle nut, toast",
// "caffeineScale":244,"price":1540,"inStock":true,"rating":1,
// "imageUrl":"http://s7d5.scene7.com/is/image/Teavana/32664_d?$cimg$",
// "__v":0,"categories":["dark","cold"]}