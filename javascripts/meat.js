// This SandwichMaker IIFE augments the original one
var SandwichMaker = (function(maker) {

  // Private variable to store the different meat prices
  var meatPrices = {"salami": 1.00, "ham": 1.50, "turkey": 1.50, "roast beef": 1.75};

  // Augment the original object with another method
  maker.addMeat = function(meat) {
  	var price = 0;
  	for(kind in meatPrices) {
  		if(meat == kind) {
  			price = meatPrices[kind];
  		}
  	}
  	return price;
  };

  // Return the new, augmented object with the new method on it
  return maker;
})(SandwichMaker || {});