var area = (function() {
	var width = 3;
	var height = 2;
	return width * height;

}());


/* Immediately Invoked Function Expressions (IIFE)
These types of functions are not given a name. Instead, they are executed once the interpreter 
comes across them. 
Above, the variable area will hold the value returned from the function. 


The Final parentheses after the closing curly brace of the code block tell the interpreter
to call the function immediately. 
The first and last parentheses [(] function and   }()  [)] in the box tell the interpreter to 
treat this function as an expression. 