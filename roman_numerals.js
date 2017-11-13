function to_roman (num) {
  // your implementation code here
  var roman = '';
  while (num > 0) {
    if(num >= 1000){
      roman += 'M';
      num -= 1000;
    }
    if(num >= 900){
      roman += 'CM';
      num -= 900;
    }
    if(num >= 500){
      roman += 'D';
      num -= 500;
    }
    if(num >= 400){
      roman += 'CD';
      num -= 400;
    }
    if(num >= 100){
      roman += 'C';
      num -= 100;
    }
    if(num >= 90){
      roman += 'XC';
      num -= 90;
    }
    if(num >= 50){
      roman += 'L';
      num -= 50;
    }
    if(num >= 40){
      roman += 'XL';
      num -= 40;
    }

    if(num >= 10){
      roman += 'X';
      num -= 10;
    }

    if (num == 9) {
      roman += 'IX';
      num -= 9;
    }
    if (num >=5) {
      roman += 'V';
      num -= 5;
    }
    if (num == 4) {
      roman += 'IV';
      num -= 4
    }
    if (num >=1) {
      roman += 'I'
      num -= 1;
    }
  }
  return roman;
}

// Drive code
console.log('My totally sweet testing script for new roman\n')
console.log('input | expected | actual')
console.log('——————|——————————|———————')
console.log('4     | IV       | ', to_roman(4))
console.log('9     | IX       | ', to_roman(9))
console.log('13    | XIII     | ', to_roman(13))
console.log('1453  | MCDLIII  | ', to_roman(1453))
console.log('1646  | MDCXLVI  | ', to_roman(1646))
