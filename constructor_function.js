// constructor function / parent function/ mothership
function person(name, age, gender){
    this.name = name
    this.age = age
    this.gender = gender
}

// creating a new person based off mothership (personm function)
// so create a variable with the person's name, and using the arguments in the function, write the new person's attributes
// from the order in which the arguments are written.
// so in this case name, age, gender -> craig, 24, gender (in quotes)
// thus becoming an object, the mothership is a person making machine
var craig = new person('craig', 24, 'male')



// What is prototype? this is a keyword that modifies the mothership(constructor fucntion)(person making machine), or children of the Mothership(individually)
// so once a modification happens, every child created from the mothership gets modified also.

person.prototype.hobby = function(hobby){
  this.hobby = hobby
}

// so new person(person recently created).new category(new category to be added)() -> (content of the new category)
// Note: any new categorie(s) will be only applicable to the specific new person that was created, does not modify the parent
// or any other new person that was added before or after
// then function(), the argument(s) will be the new categorie(s) that will be added. function(hobby) will contain this.hobby.
// this is is like saying that the new person OWNS this new category which will be hobby.

craig.hobby('computers')


// In order to add new categories and make children inherit them, the parent function needs to be written over.
