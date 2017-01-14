// write a function called vowToNum to replace every letter e or E with a 3 and every i or I with a 1
// and every o or O with 0

function vowToNums (str) {
  var cap = str.split('')
  cap.forEach(function(x, idx, arr){
    switch(x){
      case 'e' : x = '3'
      break;
      case 'E' : x = '3'
      break;
      case 'i' : x = '1'
      break;
      case 'I' : x = '1'
      break;
      case 'o' : x = '0'
      break;
      case 'O' : x = '0'
      break;
    }
    arr[idx] = x
  })

  return cap.join(' ')
}

vowToNums('charles')