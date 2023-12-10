//use for loops (for of & for in) output -return, print || log -console.log
// Pizza Place Functions
const pizzaToppings = ["pepperoni", "beef", "cheese", "peppers", "sausage"];

function greetCustomer() {
  let greeting = "Welcome to Pizza Place, our toppings are: ";
  for (let i = 0; i < pizzaToppings.length; i += 1) {
    greeting += pizzaToppings[i] + " ";
  }
  console.log(greeting);
}
greetCustomer();

function getPizzaOrder(num, size, crust, ...pizzaToppings) {
  console.log(
    num + " " + size + " " + crust + " crust with",
    pizzaToppings.join(", "),
    "coming up!"
  );
  return [num, size, crust, pizzaToppings];
}

function preparePizza([size, crust, toppings]) {
  console.log("Cooking pizza time!");
  return {
    size: size,
    crust: crust,
    toppings: toppings
  };
}

function servePizza(size, crust, toppings) {
  let listToppings = toppings.filter(topping =>
    pizzaToppings.includes(topping)
  );
  console.log(
    "Order up, here is your " + size,
    crust,
    "crust with " + listToppings.join(", "),
    "Enjoy!"
  );
  return { size: size, crust: crust, toppings: listToppings };
}

let pizzaOrder = getPizzaOrder(1, "large", "thin", "pepperoni", "beef");
let preparedPizza = preparePizza(pizzaOrder.slice(1));
let servedPizza = servePizza(
  preparedPizza.size,
  preparedPizza.crust,
  preparedPizza.toppings
);
console.log(servedPizza);
