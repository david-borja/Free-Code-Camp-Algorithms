function orbitalPeriod(arr) {
  var resArr = arr;
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
  resArr.map(satelite =>{
    var toElevate = earthRadius + (satelite.avgAlt);
    delete satelite.avgAlt;
    var numerator = Math.pow(toElevate,3);
    var toSquare = numerator/GM;
    var toMultiply = Math.sqrt(toSquare);
    var toRound = 2 * Math.PI * toMultiply
    var orbPer = Math.round(toRound);
    satelite.orbitalPeriod = orbPer; 
  });
  return resArr;
}
