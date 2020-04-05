function steamrollArray(arr) {
  var flatArr = [];
  console.log("The array received is", arr);
  console.log("FlatArray is empty");
  for (var i=0; i<arr.length; i++){
    console.log("Checkinf if", arr[i], "is an array");
    if(Array.isArray(arr[i])){
      var subArr = steamrollArray(arr[i]);
      console.log("The subArr value is", subArr, "which is the result of SA funct with i = ", i);
      console.log("FlatArray is now", flatArr);
      flatArr = flatArr.concat(subArr);
      console.log("... and after concatenating with subArr",subArr,"flatArr is", flatArr);
    }else{
      flatArr.push(arr[i]);
      console.log("We pushed:", arr[i]);
      console.log("After pushing, flatArr is:", flatArr);
    } 
  }
  console.log("End of loop, flatArr is:",flatArr);
  return flatArr;
}
