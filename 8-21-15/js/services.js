app.factory('ShoppingCart', function() {
  var ShoppingCart = {};

  ShoppingCart.shoppingCart = [];

  ShoppingCart.addTea = function(obj) {
    ShoppingCart.shoppingCart.push(obj);
  };


  return ShoppingCart;
});