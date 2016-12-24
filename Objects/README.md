OBJECTS

What are Javascript objects?
 An object is a collection of named values. These values are normally called properties of the object.
 Objects are one of the fundamental data types in Javascript.

 In order to refer to an object, you have to use . (dot)  notation.
 for Example take this code.

    Object name -----> car . wheels  <----- property in the car object
     so: 
        Object .(dot) property 
        truck  .      cargo

car.wheels;
truck.cargo

When a function is stored as a property in a object, it is usually referred to as a method & the property name becomes the name of that method.
To invoke a method of an object, you have to use the . (dot notation) syntax to extract the function value from the object and then use the ()
syntax to invoke that function.

for Example:

document.write("this is a test")
document ---> Object . write() ---> method

Here is what a basic object with a property:value will look like.
 var testObj = {
     name: "Learning Js Objects",
     date: "december 23rd",
     method: function () {
         console.log("this is fun!!")
     }
 }

testObj.method("Super")
console.log(testObj.date)
alert(testObj.name)


var testObj ---> object declaration
name: "Learning Js Objects", ---> property: value
, ----> if you have more than one property: value in the object, you must have a comma to separate them, Otherwise you will get an error. 
        The last property: value does not need a comma after it.
