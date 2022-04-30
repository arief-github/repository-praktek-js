function Person(firstName, lastName){
  this.firstName = firstName;
  this.lastName = lastName;

  this.swapNames = function(){
    [this.firstName, this.lastName] = [this.lastName, this.firstName]
  }

  Person.prototype.swapNamesAgain = function(){
    [this.firstName, this.lastName] = [this.lastName, this.firstName];
  }
}

const newPerson = new Person('Arief','Kurniawan');
newPerson.swapNamesAgain();
console.log(newPerson.firstName);
