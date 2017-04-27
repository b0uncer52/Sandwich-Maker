// This SandwichMaker IIFE augments the original one
var SandwichMaker = (function(maker) {

  // Private variable to store the different meat prices
  var condimentPrices = {"mustard": 0, "ketchup": 0, "mayo": 0, "sriracha": .50};

  // Augment the original object with another method
  maker.addCondiment = function(condiment) {
    var price = 0;
  	for(kind in condimentPrices) {
  		if(condiment == kind) {
  			price = condimentPrices[kind];
  		}
  	}
  	return price;
  };

  // Return the new, augmented object with the new method on it
  return maker;
})(SandwichMaker || {});