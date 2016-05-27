function area(width, height) {
	return width * height;
};

var size = area(3, 4);

/* Function declaration: creates a function that you can call later in your code 
In order to call the function later in your code, you must give it a name, so they are 
known as named functions. 

function area is declared while it is called below the function (var size = area(3, 4)).*/

var area = function(width, height) {
	return width * height;
};

var size =  area(3, 4);


/*Function expression: If you put a function where the interpreter would expect to see an 
expression, then it is treated as an expression, thus giving it the name function expression.

In function expressions, the name is usually omitted. A funtion with no name is called an 
anonymous funtion.  Above, the function is stored in a variable called area. It can be called 
like any function created without a function declaration. 

In a function expression, tg function is not processed until the interpreter gets to that statement.
This means you cannot call this function before the interpreter has discovered it.