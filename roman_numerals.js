
function to_roman (num) {
  var digit = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1] // buat var yang menampung array yang berisi digit 
  var romawi = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'] // buat var yang menampung array yang berisi huruf romawi
  var tampung ='';
  for(var i = 0; i < digit.length; i++){   //looping array digit berdasarkan length nya
  //console.log(digit[i])
	  while(num >= digit[i]){ // looping terus jalan ketika num lebih besar dari digit[i]
	  //console.log(romawi[i])
		  tampung += romawi[i] // ketika kondisi diatas terpenuhi maka variabel tampung diisi oleh romawi[i]
		  num -= digit[i] // kondisi supaya looping berhenti
	  }
   }
     return tampung
  /*
  if(num < 4){
		tampung += 'I'
  } else if(num === 4){
		tampung = 'IV'
  } else if(num === 5){
		tampung = 'V'
  } else if(num === 9){
		tampung = 'IX'
  } else if(num === 10){
		tampung = 'X'
  } else if(num === 40){
	  tampung = 'XL'
  } else if(num === 50){
	  tampung = 'L'
  } else if(num === 100){
	  tampung = 'C'
  } 
  */
}
  
  /*
  var tampung;
  if(num === 1){
	  tampung = 'I'
  } else if(num === 4){
	  tampung = 'IV'
  } else if(num === 5){
	  tampung = 'V'
  } else if(num === 10){
	  tampung = 'X'
  } else if(num === 9){
	  tampung = 'IX'  
  } 
  } 
  return tampung
  */
 
// Drive code
console.log('My totally sweet testing script for new roman\n')
console.log('input | expected | actual')
console.log('——————|——————————|———————')
console.log('4     | IV       | ', to_roman(4))
console.log('9     | IX       | ', to_roman(9))
console.log('13    | XIII     | ', to_roman(13))
console.log('1453  | MCDLIII  | ', to_roman(1453))
console.log('1646  | MDCXLVI  | ', to_roman(1646))
