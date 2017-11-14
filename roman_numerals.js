function to_roman(num) {
  // your implementation code here
  var roman='',a=0;
  if(num>=1000){
    a=Math.floor(num/1000);
    for(let i=0;i<a;i++){
      roman+='M'
    }
    num=num-(1000*a);
    a=0;
    
  }
  if(num>=500&&num<1000){
    if(num>=900&&num<1000){
      a=Math.floor(num/900);
      for(let i=0;i<a;i++){
        roman+='CM'
      }
      num=num-(900);
      a=0;
    }
    else{
      
      a=Math.floor(num/500);
      for(let i=0;i<a;i++){
        roman+='D'
      }
      num=num-(500*a);
      a=0;
    }
  }
  if(num>=100&&num<500){
    if(num>=400&&num<500){
      a=Math.floor(num/400);
      for(let i=0;i<a;i++){
        roman+='CD'
      }
      num=num-(400);
      a=0;
    }
    else{
      a=Math.floor(num/100);
      for(let i=0;i<a;i++){
        roman+='C'
      }
      num=num-(100*a);
      a=0;
    }
  }
  if(num>=50&&num<100){
    if(num>=90&&num<100){
      a=Math.floor(num/90);
      for(let i=0;i<a;i++){
        roman+='XC'
      }
      num=num-(90);
      a=0;
    }
    else{
      a=Math.floor(num/50);
      for(let i=0;i<a;i++){
        roman+='L'
      }
      num=num-(50*a);
      a=0;
    }
  }
  if(num>=10&&num<50){
    if(num>=40&&num<50){
      a=Math.floor(num/40);
      for(let i=0;i<a;i++){
        roman+='XL'
      }
      num=num-(40);
      a=0;
    }
    else{
      a=Math.floor(num/10);
      for(let i=0;i<a;i++){
        roman+='X'
      }
      num=num-(10*a);
      a=0;
    }
  }
  if(num>=5&&num<10){
    if(num>=9&&num<10){
      a=Math.floor(num/9);
      for(let i=0;i<a;i++){
        roman+='IX'
      }
      num=num-(400);
      a=0;
    }
    else{
      a=Math.floor(num/5);
      for(let i=0;i<a;i++){
        roman+='V'
      }
      num=num-(5*a);
      a=0;
    }
  }
  if(num<5){
    if(num===4){
      a=Math.floor(num/4);
      for(let i=0;i<a;i++){
        roman+='IV'
      }
      num=num-(4);
      a=0;
    }
    else{
      for(let i=0;i<num;i++){
        roman+='I'
      }
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