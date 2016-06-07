function getArea(width, height) {
	var area = width * height;
	return area;
}

var wallSize = getArea(3, 2);
document.write(wallSize);

/* var area and return area are the local (or function level scope) scope while 
wallSize is a global scope. */
