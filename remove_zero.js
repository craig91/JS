//Write a function that, given a string as input, will remove all 0s from that string.

removeZero("he0ll0o2016")  // returns "hello216"

// console.log(newStr)

function removeZero(str){
	var newStr = ""
	for(var i = 0; i < str.length; i++ ){
      if(str[i] != "0"){
       
       
      newStr += str[i]
      }
	}
	
	return newStr
}