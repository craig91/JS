function getArea(width, height) {
	var area = width * height;
	return area;
}

var wallSize = getArea(3, 2);
document.write(wallSize);


/* Variable Scope: Local Variables
When a variable is created inside of a function using the var keyword, it can only be used in that function.
It is called a local variable or a function-level scope. 
It cannot be accessed outside the function in which it was declared. 

In the function above, area is in the local or function-level scope (with in the curly braces)

Global Variables:

If you create a variable outside of a function, then it can be used anywhere within the script.
It is called a global variable and has a global scope. 
In the code above wallSize a global variable.

Global variable are stored in memory for as long as the web page is loaded into the web browser.
This means they take up more memory than local variables and it increases the risk of naming conflicts. 

