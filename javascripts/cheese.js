// This SandwichMaker IIFE augments the original one
var SandwichMaker = (function(maker) {

  // Private variable to store the different meat prices
  var cheesePrices = {"swiss": .50, "cheddar": .50, "parmesan": .75, "Colby": 1.00};

  // Augment the original object with another method
  maker.addCheese = function(cheese) {
    var price = 0;
  	for(kind in cheesePrices) {
  		if(cheese == kind) {
  			price = cheesePrices[kind];
  		}
  	}
  	return price;
  };

  // Return the new, augmented object with the new method on it
  return maker;
})(SandwichMaker || {});