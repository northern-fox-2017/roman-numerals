function to_roman (num) {
  // your implementation code here
  var romanNum = '';
  // var specialNum = [1,4,5,9,10,40,50,90,100,400,500,900,1000] --OBSOLETE
  // var specialChar = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD','D', 'CM', 'M'] --OBSOLETE

  var objRomanArabic = {  
    'M': 1000,
    'CM': 900,
    'D': 500,
    'CD': 400,
    'C': 100,
    'XC': 90,
    'L': 50,
    'XL': 40,
    'X': 10,
    'IX': 9,
    'V': 5,
    'IV': 4,
    'I': 1,
  }
  for(let key in objRomanArabic){
  //for (let i = Object.keys(objRomanArabic).length - 1 ; i >= 0 ; i-- ){ --OBSOLETE
    // while (num / specialNum[i] >= 1) {
    //   romanNum += specialChar[i];
    //   num = num - specialNum[i];
    // }
    while (num / objRomanArabic[key] >= 1){
      romanNum += key;
      num -= objRomanArabic[key]
    }
  }  
return romanNum;

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
console.log('2900  | MMCM| ', to_roman(2900))
