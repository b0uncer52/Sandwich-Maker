// This SandwichMaker IIFE augments the original one
var SandwichMaker = (function(maker) {

  // Private variable to store the different meat prices
  var veggiePrices = {"tomato": 0, "lettuce": 0, "avocado": 1.00, "onion": 0};

  // Augment the original object with another method
  maker.addVeggie = function(veg) {
    var price = 0;
  	for(kind in veggiePrices) {
  		if(veg == kind) {
  			price = veggiePrices[kind];
  		}
  	}
  	return price;
  };

  // Return the new, augmented object with the new method on it
  return maker;
})(SandwichMaker || {});