function to_roman (num) {
  var result = '';
  while (num>0) {
    if (num >= 1000) {
      num -= 1000;
      result += 'M';
    }
    if (num == 900) {
      num -= 900;
      result += 'CM';
    }
    if (num>=500) {
      num -= 500;
      result += 'D';
    }
    if (num >= 400) {
      num -= 400;
      result += 'CD'
    }
    if (num>=100 ) {
      num -= 100;
      result += 'C';
    }
    if (num >= 90) {
      num -= 90;
      result += 'XC';
    }
    if (num >= 50) {
      num -= 50
      result += 'L';
    }
    if (num >= 40) {
      num -= 40;
      result += 'XL';
    }
    if (num >= 10) {
      num -= 10;
      result += 'X';
    }
    if (num >= 9) {
      num -= 9;
      result += 'IX';
    }
    if (num >= 5) {
      num -= 5;
      result += 'V';
    }
    if (num >= 4) {
      num-=4;
      result+= 'IV';
    }
    if (num < 4 && num > 0) {
      num -= 1;
      result += 'I';
    }
  }

  return result;
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
