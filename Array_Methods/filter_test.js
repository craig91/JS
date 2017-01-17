// write a function oddNums that receives an array of strings and numbers and returns an array of 
// only the odd numbers.

function oddNums (arr) {
  return arr.filter(function(e){
    if (typeof e === typeof 'string') {
      } else {
      return e % 2 !== 0
    }

  })

}

oddNums([1, 3, 'long', 45, 'house', 'buick', 93, 2,10])