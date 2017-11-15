var arabic = [1000, 500, 400, 100, 50, 40, 10, 9, 5, 4, 1];
var roman = ['M','D','CD','C','L','XL','X','IX','V','IV','I'];

function to_roman (num) {
  // your implementation code here
  var arabic = [1000, 500, 400, 100, 50, 40, 10, 9, 5, 4, 1];
  var roman = ['M','D','CD','C','L','XL','X','IX','V','IV','I'];
  var satuan='';

for (var i = 0; i < arabic.length; i++) {
  while(num >= arabic[i]){
    satuan += roman[i]
    num -= arabic[i]
  }
}
return satuan
}

function convertObj() {
  let objRoman = [];
  for(var j = 10; j >= 0; j--) {
    let obj = {};
    obj[roman[j]] = arabic[j]
    objRoman.push(obj)
  }
  return objRoman
}
console.log(convertObj());

// Drive code
console.log('My totally sweet testing script for new roman\n')
console.log('input | expected | actual')
console.log('——————|——————————|———————')
console.log('4     | IV       | ', to_roman(4))
console.log('9     | IX       | ', to_roman(9))
console.log('13    | XIII     | ', to_roman(13))
console.log('1453  | MCDLIII  | ', to_roman(1453))
console.log('1646  | MDCXLVI  | ', to_roman(1646))
