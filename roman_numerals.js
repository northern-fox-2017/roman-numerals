function to_roman (num) {
  let roman = [["","I","II","III","IV","V","VI","VII","VIII","IX"],
              ["","X","XX","XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"],
              ["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM"],
              ["","M","MM","MMM","MMMM"]];
  let nomer = '';
  let str = num.toString().split('').reverse();
  // console.log(str);
              // console.log(roman[1][4])
  for (var i = 0; i < str.length; i++) {
    // console.log(roman[i])
    nomer = roman[i][Number(str[i])] + nomer;
  }
  return nomer;
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
