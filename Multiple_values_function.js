function getSize(width, height, depth) {
	var area = width * height;
	var volume =  width * height * depth;
	var sizes = [area, volume];
	return sizes;
}

var areaOne = getSize(3, 2, 3)[0];
var areaTwo = getSize(3, 2, 3)[1];

/* Getting multiple values out of a function
The getSize funtion is created. The values width, height and depth is declared inside of 
the function.
The variables area and volume are declared and the calculations of the values that 
are inside of the funtion are represented by these variables. 

The array var sizes = [area, volume];
           return sizes;
is returned to the code that called the getSize() function, allowing the values to be used. 