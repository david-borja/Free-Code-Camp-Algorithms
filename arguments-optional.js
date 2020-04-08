function addTogether(){
  if(typeof arguments[0] === "number") var arg1 = arguments[0];
  else return undefined;

  if (typeof arguments[1] === "number") return arg1 + arguments[1];
  else if (arguments[1] === undefined){
    return function (arg2){
      if (typeof arg2 === "number") return arg1 + arg2;
      else return undefined;
    }
  } 
}
