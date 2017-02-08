// What is a closure?
// A closure is an inner function that has access to the outer  (outer) function's variables-scope chain.
// The closure has three scope chains: it has access to its own scope, it has access to the outer function's variables, and it has access to the global variables.

function showName (firstName, lastName) {
  var nameIntro = " Your name is";

  function makeFullName() {
    return nameIntro + firstName + " " + lastName;
  }
  return makeFullName();
  // makeFullName() has access to the outer function's variables & parameters.
}

showName("Craig", "Dejean")