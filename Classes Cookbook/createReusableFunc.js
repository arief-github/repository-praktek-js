// class have their own syntax requirements that you must follow
// Constructor funtions are always named constructor
// function inside Class not using keyword function, although they are
// declare like functions in every other respect
class Person {
  constructor(firstName, lastName, dateOfBirth){
    this.firstName = firstName;
    this.lastName = lastName;
    this.dateOfBirth = dateOfBirth;
  }
  // add method
  swapNames(){
    [this.firstName , this.lastName] = [this.lastName, this.firstName]
  }
}

// invoke with keyword new
// const newPerson = new Person('Arief','Kurniawan');
// console.log(newPerson.firstName);
// console.log(newPerson.lastName);


// test new method in person class
const newPerson = new Person('Arief','Kurniawan', new Date(2001,11,04));
newPerson.swapNames();
// console.log(newPerson.firstName);


// class in function expression
const personExpression = class Person1{
  constructor(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

// this wont work, cuz there is no Person1 Class
// const newPerson1 = Person1('Arief', 'Kurniawan');
// console.log(newPerson1.firstName);

const newPerson1 = new personExpression('Arief','Kurniawan');
// console.log(newPerson1.firstName);

// Multiple Constructor
const japanesePerson = new Person('Haruka','Tanabe');
const koreanPerson = new Person('Kim','Yeok');
const chinesePerson = new Person('Xhi','Can');
const indonesiaPerson = new Person('Renata','Moeloek');

// console.log(indonesiaPerson.firstName);


// constructor with optional arguments using object literal
// how to print it?
const partialInfoPerson1 = new Person({
  lastName: 'Takei',
  birthDate: new Date(1990, 04, 23)
})

const partialInfoPerson2 = new Person({
  firstName:'Luke',
  lastName: 'Takei'
})

// console.log(partialInfoPerson1,{lastName});
