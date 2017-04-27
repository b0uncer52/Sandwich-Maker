var SandwichMaker = (function(maker) {

  // Private variable to store the price
  var totalPrice = 0;
  var ingredients = [];

  // Return the public interface that other code can interact with
  maker.addTopping = function(toppingPrice, topping) {
    totalPrice += toppingPrice;
    ingredients.push(topping);
    return ingredients;
  };
  maker.getSandwich = function() {
    return ingredients.reduce(function(a, b) {
      return a + ", " + b;
    });
  };
  maker.getPrice = function() {
    return totalPrice;
  };
  return maker;
})(SandwichMaker || {});