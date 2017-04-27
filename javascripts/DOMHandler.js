// Variable to hold the final price. Default to 0.
var finalSandwichPrice = 0;

// Variable to hold topping that the user selects
var selectedTopping;
var price = 0;

// Get a reference to the <select> element that has all the meat options
var meatChooser = document.getElementById("meat-chooser");
var breadChooser = document.getElementById("bread-chooser");
var cheeseChooser = document.getElementById("cheese-chooser");
var condimentChooser = document.getElementById("condiment-chooser");
var veggieChooser = document.getElementById("veggie-chooser");
var display = document.getElementById("display");
var submit = document.getElementById("submit");
/*
  A <select> element broadcasts a change event, so you listen for it
  and get the value of the topping from your augmented IIFE
*/
submit.addEventListener("click", function(event) {
  var sammy = SandwichMaker.getSandwich();
  display.innerHTML = sammy + "<br>$" + finalSandwichPrice;
});
meatChooser.addEventListener("change", function(event) {
  // Get the value chosen from the DOM
  selectedTopping = event.target.value;
  price = SandwichMaker.addMeat(selectedTopping);
  finalSandwichPrice += price;
  console.log(SandwichMaker.addTopping(price, selectedTopping));
});
breadChooser.addEventListener("change", function(event) {
  // Get the value chosen from the DOM
  selectedTopping = event.target.value;
  price = SandwichMaker.addBread(selectedTopping);
  finalSandwichPrice += price;
  console.log(SandwichMaker.addTopping(price, selectedTopping));
});
cheeseChooser.addEventListener("change", function(event) {
  // Get the value chosen from the DOM
  selectedTopping = event.target.value;
  price = SandwichMaker.addCheese(selectedTopping);
  finalSandwichPrice += price;
  console.log(SandwichMaker.addTopping(price, selectedTopping));
});
condimentChooser.addEventListener("change", function(event) {
  // Get the value chosen from the DOM
  selectedTopping = event.target.value;
  price = SandwichMaker.addCondiment(selectedTopping);
  finalSandwichPrice += price;
  console.log(SandwichMaker.addTopping(price, selectedTopping));
});
veggieChooser.addEventListener("change", function(event) {
  // Get the value chosen from the DOM
  selectedTopping = event.target.value;
  price = SandwichMaker.addVeggie(selectedTopping);
  finalSandwichPrice += price;
  console.log(SandwichMaker.addTopping(price, selectedTopping));
});
