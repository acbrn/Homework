//Inside your JS file, create two variables: pizzaPlace and numberOfToppings
let pizzaPlace = "Pizzeria Americano";
let numberOfToppings = 6;

//Print the variables and their types.
console.log(pizzaPlace, typeof pizzaPlace);
console.log(numberOfToppings, typeof numberOfToppings);

//Print a template literal that uses both variables to construct a short sentence about your Pizza Place.
let tempVar = `Welcome to ${pizzaPlace}, we now have ${numberOfToppings} approved toppings by the health department!`;
console.log(tempVar);

//Construct an if statement that prints "Quality, not quantity." if you offer less than 10 toppings, or "A whole lot of pizza." if you offer 10 or more toppings.
if (numberOfToppings < 10) {
  console.log("Quality, not quantity.");
} else {
  console.log("A whole lot of pizza.");
}

//loop
function evenNumToppings() {
  for (let x = 0; x <= 6; x += 2) {
    console.log(x);
  }
}
evenNumToppings();
