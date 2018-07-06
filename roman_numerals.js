function to_roman (num) {
  let result = '';
  let number = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000];
  let specialRom = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'LC', 'C', 'CD', 'D', 'DM', 'M'];

  for(var i = number.length-1; i >= 0; i--) {
    while(num >= number[i]) {
      result += specialRom[i];
      num -= number[i];
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
