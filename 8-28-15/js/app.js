var app = angular.module("coinApp", ["firebase"]);
  app.controller("CurrencyController", ["$scope", "$firebaseObject", function($scope, $firebaseObject) {
    var bitcoinRef = new Firebase("https://publicdata-cryptocurrency.firebaseio.com/bitcoin")
    var liteRef = new Firebase("https://publicdata-cryptocurrency.firebaseio.com/litecoin")
    var dogeRef = new Firebase("https://publicdata-cryptocurrency.firebaseio.com/dogecoin")
   $scope.bitcoinData = $firebaseObject(bitcoinRef)
   $scope.liteData = $firebaseObject(liteRef)
   $scope.dogeData = $firebaseObject(dogeRef)

  }
]);
  