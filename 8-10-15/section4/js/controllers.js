app.controller('ContactController', ["$scope", "ContactList", function($scope, ContactList){
   $scope.contactData = ContactList.contactList;
   $scope.addContact = ContactList.addContact;
 	// console.log(ContactList)
   // console.log($scope.newContact,"*********NEWCONTACT**********");
   
   $scope.saveContact = function () {
	   $scope.addContact({
	   	name: $scope.newContact.cName,
	   	email:$scope.newContact.cEmail,
	   	phone:$scope.newContact.cPhone
	   });

   };

   $scope.findContact = function (contact) {
   	ContactList.findContact(contact)
   }
   
}]);   

app.controller('ShowController', ["$scope", "ContactList", '$http', '$routeParams', function($scope, ContactList, $http, $routeParams){
	$scope.contactData = ContactList.contactList;
	$scope.routeName = $routeParams.id

	var showOneContact = function () {
		$scope.contactData.forEach(function(x) {
			if (x.name === $routeParams.id) {
				// console.log("NAME FOUND")
				$scope.returnData = x
				gifySearch = "http://api.giphy.com/v1/gifs/search?q=" + encodeURIComponent(x.name) + "&api_key=dc6zaTOxFJmzC"
				console.log(gifySearch)
				$http.get(gifySearch).
					then(function(response) {
						$scope.userGif = response.data.data[0].embed_url
						console.log(response.data.data[0].embed_url)

					}, function(response) {

					});
			};
		})
	}; // END FUNCTION

	showOneContact()




}]);   





// app.controller("contactController", function($scope){
// 	$scope.contacts = [];


// 	$scope.saveContact = function(contact){
// 		$scope.contacts.push({		
// 			name: contact.cName,
// 			email: contact.cEmail, 
// 			phone: contact.cPhone 	
// 	})}

// })

// app.controller("MyFirstController", function($scope){
// 		$scope.name = "Severus Snape";
// })

// app.controller("ExercisesController", function($scope){
// 	$scope.FavColor = "Purple";
// 	$scope.secondsInACentury = 60 * 60 * 24 * 365 * 100;
// 	$scope.rightNow = new Date();
// 	$scope.manuel = function(){
// 		return "SUCKS"
// 	}
// 	$scope.names = ["Harry", "Ron", "Hermione", "Sirius", "Hedwig", "Tonks"];
// 	$scope.symbols = ["&spades;", "&clubs;", "&hearts;", "&diams;"];
// 	$scope.dups = [1,1,2,5,6,9,9,9];
// 	$scope.objs = {"this":"That", "something": "something Else"}
// })

// app.controller("cameraController", function($scope){
// 	$scope.cameras = [
//         {
//             title: "Nikon D3100 DSLR",
//             image: "http://ecx.images-amazon.com/images/I/713u2gDQqML._SX522_.jpg",
//             rating: 3.4,
//             price: 369.99,
//             onSale: true
//         },
//         {
//             title: "Canon EOS 70D",
//             image: "http://ecx.images-amazon.com/images/I/81U00AkAUWL._SX522_.jpg",
//             rating: 2.0,
//             price: 1099.0,
//             onSale: false
//         },
//         {
//             title: "Nikon D810A",
//             image:"http://ecx.images-amazon.com/images/I/91wtXIfLl2L._SX522_.jpg",
//             rating: 4.2,
//             price: 3796.95,
//             onSale: true
//         }
// 	]
// })

// app.controller("clickController", function($scope){
// 	$scope.number = 5
// 	$scope.pickRandomNumber = function() {
// 		$scope.number = Math.floor(Math.random() * 10) + 1
// 	}
// 	$scope.reverse = function() {
// 		$scope.word = $scope.word.split("").reverse().join("")
// 	}
	
// })

// app.controller("pingPongController", function($scope){
// 	$scope.playerOne = 0
// 	$scope.playerTwo = 0
// 	$scope.count = 0
// 	$scope.incrementOne = function(){
// 		$scope.playerOne += 1
// 		$scope.count += 1
// 		if ($scope.count === 4) {
// 			$scope.count = 0
// 		} 
// 	}
// 	$scope.incrementTwo = function(){
// 		$scope.playerTwo += 1
// 		$scope.count += 1
// 		if ($scope.count === 4) {
// 			$scope.count = 0
// 		} 
// 	}
// 	$scope.reset = function() {
// 		$scope.playerOne = 0
// 		$scope.playerTwo = 0
// 		$scope.count = 0

// 	}
// 	// when total score increases, increase. When increase === 2 reset count, hide serve p1, show serve p2
// 	// $scope.serveCount = function(){
// 	// 	if ($scope.count === 4) {
// 	// 		$scope.count = 0
// 	// 	} 
// 	// } 
// })





