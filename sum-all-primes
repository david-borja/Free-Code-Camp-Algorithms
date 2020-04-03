function sumPrimes(num){
  var primArr = [];
  for(var i=2; i<=num; i++){
    for(var divisor=1; divisor<=i; divisor++){
      //console.log("Dividing",i,"by",divisor)
      if(i%divisor===0 && divisor !== 1 && divisor !== i){
        //console.log(i, "can be divided by", divisor);
        break;
      }else if (i%divisor===0 && divisor !== 1 && i=== divisor){
        //console.log(i, "is a prime");
        primArr.push(i);
      }
    }
  }
  var result = primArr.reduce((a,b) => a + b, 0);  
  //console.log(primArr);
  //console.log(result);
  return result;
}
