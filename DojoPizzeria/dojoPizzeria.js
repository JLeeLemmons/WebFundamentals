function pizzaOven(crusType, sauceType, cheeses, toppings){
    var pizza = {}; 
    pizza.crusType = crusType; 
    pizza.sauceType = sauceType;
    pizza.cheeses = cheeses; 
    pizza.toppings = toppings; 
    return pizza; 
}
var pizza1 = pizzaOven("deep dish", "traditional", ["mozzarella"],["pepperoni", "sausage"]);
var pizza2 = pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"],["mushrooms", "olives", "onions"]);
var pizza3 = pizzaOven("thin", "tomatoe", "provolone", ["pinneapple", "Canadien bacon", "tomatoe"]); 
var pizza4 = pizzaOven("hand tossed", "white sauce", "provolone", ["green pepper", "bacon", "tomatoe"]); 

console.log(pizza4); 