// This SandwichMaker IIFE augments the original one
var SandwichMaker = (function(maker) {

  // Private variable to store the different meat prices
  var breadPrices = {"white": 1.00, "wheat": 1.25, "rye": 1.50, "pretzel": 2.00};

  // Augment the original object with another method
  maker.addBread = function(bread) {
    var price = 0;
  	for(kind in breadPrices) {
  		if(bread == kind) {
  			price = breadPrices[kind];
  		}
  	}
  	return price;
  };

  // Return the new, augmented object with the new method on it
  return maker;
})(SandwichMaker || {});