function truthCheck(collection, pre) {
  var counter = 0;
  for(var obj in collection){
    if (collection[obj].hasOwnProperty(pre) && Boolean(collection[obj][pre])){
      counter ++
    }
  }
  return counter == collection.length;
}
