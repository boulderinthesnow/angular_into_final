var app = angular.module("coinApp", ["firebase"]);
  app.controller("CurrencyController", ["$scope", "$firebaseObject", function($scope, $firebaseObject) {
    var bitcoinRef = new Firebase("https://publicdata-cryptocurrency.firebaseio.com/bitcoin")
    console.log(bitcoinRef)
   $scope.bitcoinData = $firebaseObject(bitcoinRef)
  }
]);
  