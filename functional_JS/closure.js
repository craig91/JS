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



function celebrityName(firstName) {
  var nameIntro = "This celebrity is ";
   // lastName() has access to celebrityName's variable & params
  function lastName(theLastName) {
    return nameIntro + firstName + " " theLastName;
  }
  return lastName;
}

var mjName = celebrityName("Michael");

mjName("Jackson")

// This one was a little tricky but I got it, it is also one of the most important things to understand about closures. The inner function ( lasName() ) still has access to the outer function's variables even after the outer function has returned. So var mjName is kind of hard coding the first name and then the 2nd mj name function call will be the last name, because of the inner function.