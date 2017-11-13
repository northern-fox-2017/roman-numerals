function to_roman (num) {
  var romanObj = {
	1:'I',
	5:'V',
	10:'X',
	50:'L',
	100:'C',
	500:'D',
	1000:'M'
	}
	var arr = [];
	while(num >= 1000){
	  arr.push(romanObj[1000]);
	  num = num - 1000;
	}
	while(num >= 500){
	  arr.push(romanObj[500]);
	  num = num - 500;
	}
	while(num >= 400){
	  arr.push('CD');
	  num = num - 400;
	}
	while(num >= 100){
	  arr.push(romanObj[100]);
	  num = num - 100;
	}
	while(num >= 50){
	  arr.push(romanObj[50])
	  num = num - 50;
	}
	while(num > 40){
	  arr.push('XL');
	  num = num - 40;
	}
	while(num >= 10){
	  arr.push(romanObj[10]);
	  num = num - 10;
	}
	while(num >= 9){
	  arr.push('IX');
	  num = num - 9;
	}
	while(num >= 5 ){
	  arr.push(romanObj[5]);
	  num = num - 5;
	}
	while(num >= 4){
	  arr.push('IV');
	  num = num - 4;
	}
	while(num >= 1){
	  arr.push(romanObj[1]);
	  num = num - 1;
	}
	join = arr.join('');
	return join;
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
