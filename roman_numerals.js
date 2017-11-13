function to_roman (num) {
  // your implementation code here
  let arrAngka = [1000,900,500,400,100,90,50,40,10,9,5,4,1];
  let arrRomawi = ['M','CM','D','CD','C','XC','L','XL','X','IX','V','IV','I'];


  let roman = ""
  for(var i = 0; i < arrAngka.length; i++){
    if(num <= 0){
      return roman
    }
    else if(num >= arrAngka[i]){
      // console.log(arrRomawi[i])
      roman += arrRomawi[i]
      // console.log(roman)
      return roman + to_roman(num - arrAngka[i])
    }
  }
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
