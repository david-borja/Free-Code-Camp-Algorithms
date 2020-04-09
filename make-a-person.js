var Person = function(firstAndLast) {
  var fullName = firstAndLast;

  this.getFirstName = function(){
    return fullName.split(" ")[0];
  }

  this.getLastName = function(){
    return fullName.split(" ")[1];
  }

  this.getFullName = function(){
    return fullName;
  }

  this.setFirstName = function(name){
    fullName = name + " " + fullName.split(" ")[1]
  }

  this.setLastName = function(surname){
    fullName = fullName.split(" ")[0] + " " + surname;
  }

  this.setFullName = function(completeName){
    fullName = completeName;
  }

};
