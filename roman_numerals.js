function to_roman (num) {

  let latin  = ['M','D','DC' ,'C','L','XL','X','IX','V','IV','I'];
  let number = [1000,500,400,100,50,40,10,9,5,4,1];
  let result = '';
    for(let i in latin){
      while(num >= number[i]){
        result += latin[i];
        num  -= number[i]
      }
    }
      return result
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
console.log('3000  | MMM  | ', to_roman(3000))
