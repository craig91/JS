// What is map()?
// map() creates a new array with the results from executing the given function for each element in the array

var arr = ['apple', 'orange', 'apple', 'banana', 'pear', 'apple', 'orange'];

var newArr = arr.map(function(item, idx, array) {
  return item.toUpperCase().slice(1);
})

console.log(newArr);

function mapThis(arr) {
  var product = arr.map(function(val, idx) {
    return val * idx;
  })
  return product;
}

mapThis([1,2,3]) // returns [0,2,6]
