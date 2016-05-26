var colors = ['white'
              'black'
              'custom'];

colors[2] = 'beige';

var el = document.getElementById('colors');


el.textContent = colors[2];



/* Values in arrays are accessed as if they are in a numbered list. In arrays, numbering
always start with 0.

In this case, in the array, white = 0, black = 1, custom = 2.


To access items in an array, the array name is specified along with the index number in 
[]*/

var itemThree;
itemThree = colors[2]

/* In the array above, I changed the 3rd item in the array from 'custom' to 'beige'.
To access a value from an array, after the array name you specify the index number for 
that value inside square brackets. 