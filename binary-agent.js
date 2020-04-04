function binaryAgent(str) {
  var arr = [];
  arr = str
    .split(" ")
    .map(item => (String.fromCharCode(parseInt(item,2))))
    .join("");
  return arr;
}
