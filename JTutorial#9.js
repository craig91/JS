var today = new Date();
var hourNow = today.getHours();
var greeting;

if (hourNow > 18){
	greeting = 'Good evening!';
} else if (hourNow > 12) {
	greeting =  'Good afternoon!';
} else if (hourNow > 0) {
	greeting = 'Good morning';
} else {
	greeting = 'Welcome';
}

document.write ('<h3>' + greeting + '</h3>' );


// [document] is the object. It represents the entire web page.

// [.] is the Member operator. The docuement has several methods and properties. 
// [.]cont..  They are known as members of that object.

// The write() method of the document object allows new contet to be written into 
// the page where the <script> element sits. 

//() are parameters. Whenever a method requires some information to work, the data
// is given inside the (). Each piece of info is called a parameter of the method.
// In this case, the write() method needs to know what to write into the page.