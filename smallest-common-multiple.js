function smallestCommons(arr) {
  var betNum = [];
  if (arr[0]<arr[1]){
    var min = arr[0];
    var max = arr[1];
  } else {
    var min = arr[1];
    var max = arr[0];
  }
  for(var i = min; i<= max; i++){
    if(i===1) betNum.push([i]);
    else betNum.push(i);
  }
  for(var i=0; i<betNum.length; i++){
    var primFact = [];
    var toDivide = betNum[i];
    for(var divisor=2; divisor<=toDivide; divisor++){
      if(toDivide%divisor===0){
        do {
            toDivide = toDivide/divisor;
            primFact.push(divisor);
        }while(toDivide%divisor === 0);
      if(toDivide===1)break;
      }
    } 
    if(primFact.length){
    betNum.splice(i,1,primFact);
    }
  }
  var uniValArr = [];
  for (var i=0; i<betNum.length; i++){
    for (var j=0; j<betNum[i].length; j++){
      if(uniValArr.includes(betNum[i][j])===false){
        uniValArr.push(betNum[i][j]);
      }
    }
  }

  for (var k = 0; k<uniValArr.length;k++){
  var val = uniValArr[k];
  var max = 0;
    for(var i = 0; i<betNum.length; i++){
      var count = 0;
      for(var j = 0; j<betNum[i].length; j++){
        if (betNum[i][j] === val) count ++;
        //console.log (count);
      }
      if (count > max) max = count;
    }
    //console.log(val, 'is found', max, 'times');
    uniValArr.splice(k,1,Math.pow(val,max));
    //console.log(max);
  }
  return uniValArr.reduce((mult, fact) => mult * fact);
  //console.log(uniValArr.reduce((mult, fact) => mult * fact));
  //console.log(betNum);
  //console.log(uniValArr);

}
