// What is currying?
// Currying is a way of constructing functions that allows partial application
// of a function's arguments.
// Basically this is saying that you can pass all of the arguments a function is
// expecting and get the result.

var greet = function (greeting, name) {
  console.log(greeting + ", " + name);
};
greet("Hello", "Heidi");

// for this function to work properly, I need to pass it 2 arguments. Next the nested currying

var iAmCurried = function (greeting) {
  return function(name) {
    console.log(greeting + ", " + name);
  };
};

// This adjustment to the function allows us to create a new function for any type of greeting
// and pass that new function the name of the person we want to greet.

var greetHello = iAmCurried("Hello");

// this variable is sort of in a way giving the function's 1st argument a default value
greetHello("craig");
greetHello("Dejean");

// calling these will say hello craig hello dejean since hello was already called in the greetHello variable.

// you can also call the function directly like this:

iAmCurried("Hello there")("Craig")
