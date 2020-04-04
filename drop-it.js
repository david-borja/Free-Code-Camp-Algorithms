function dropElements(arr, func) {
  for(var i=0; i<arr.length; i++){
    console.log(func(arr[i]));
    if(func(arr[i])===true){
      console.log(arr);
      return arr;
    } else {
      arr.shift();
      i--;
    }
  }
  return arr;
