var giftPrice = 19.99;
var nyctax = 8.875;


function taxCalculator( price, taxPercentage ) {
  var taxDecimal = taxPercentage /100;
  var taxAmt = price * taxDecimal
  
  return taxAmt;
}

//Call function
var nycTaxPrice = taxCalculator( giftPrice, nyctax );
console.log("$" + nycTaxPrice.toFixed(2));

