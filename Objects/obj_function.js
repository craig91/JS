// You can use the Object() function to create an object as well. Do this in a repl.

var newObj = new Object()
console.log(newObj)


// In a repl this will return a {} empty object.
// But how do I add properties to this object? you add it by using the variable name, then the . (dot notation), 
// then the name of the property you want to add. so:

newObj.title = "this is a new object!"

// which would return => { title: this is a new object! }
// you can do this many times to set properties and values to this ONE object. note that you can also nest the objects as well:

newObj.year = 2016;
newObj.location = "brooklyn";
newObj.nextYear = new Object();

// newObj. nextYear is a object created within the object. In order to add to it or access it, think of using the . notation like a path:

newObj.nextYear.title = "new Year!"

// this will return:

var newObj = {
    title: 'this is a new Object!',
    year:  2016,
    location: 'brooklyn',
    nextYear: { title: 'New Year!' }
}

