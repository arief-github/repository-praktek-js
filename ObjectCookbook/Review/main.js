// 'use strict';
// 7.1. Checking if an Object is a certain type
// instanceof : mengetes bahwa objek tersebut ter instansiasi dari
const mysteryObject = new Date(2022,8,12);
const primitiveValue = 20;
const stringValue = 'Hallo String';

// if(primitiveValue instanceof Date) {
//   console.log(true);
// } else {
//   console.error('primitive cannot test with instanceof');
//   console.warn('use typeof instead');
// }


// if(typeof stringValue === 'string') {
//   console.log(true);
// }



// 7.2. Using an Object Literal to Bundle Data
const employee = {
  id: 402,
  firstName: 'Lisa',
  lastName: 'Stancecki',
  birthDate: new Date(1995, 8,15),
  "main-title":"Project Manager"
}
employee.isMarried = true;
// delete employee.isMarried;
// console.log(employee);




// using new Object()
const employee1 = new Object();
// employee1.id = 403;
// employee1.firstName = "Adama";
// employee1.lastName = "Gochi";
// employee1.surename = "Adama Gochi";
// employee1.isMarried = false;

// console.log(employee1);




// using key-value syntax
employee1["id"] = 405;
employee1["firstName"] = "Arief";
employee1["lastName"] = "Kurniawan";
employee1["isMarried"] = true;
employee1["birthDate"] = new Date (2001,11,04);
// console.log(employee1);



// 7.3. Checking if an Object has a property
// use in operator o look for a property by name
const address = {
  country: 'Australia',
  city: 'Sydney',
  streetNum: '412',
  streetName: 'Worcestire Boulevard'
}

if('streetNum' in address) {
  console.log(true);
}

// this code doesnt run, because there is no address.zipCode property
if('Zipcode' in address){
  console.log(true);
}


const address2 = {
  country: 'USA',
  city: 'Sebastopol',
  streetNum: '420',
  streetName: 'Wyoming'
}

const address3 = Object.create(address2);



// hasOwnProperty doesnt support Inheritance
// console.log(address3.hasOwnProperty('city'));
// in operator support Inheritance
// console.log('city' in address3);


// 7.4. Iterating Over all the props of and Object
const address4 = {
  country: 'Australia',
  city: 'Sydney',
  streetNum: '412',
  streetName: 'Massachusetss Blvrd'
}

const properties = Object.keys(address4);

// for(const property of properties){
//   console.log(`Property: ${property}, Value: ${address4[property]}`);
// }

// Object.keys() is also commonly used to count the number of properties or length
// console.log(`The address object has a length of
//   ${properties.length}`);

// for..in loop
for(const property in address4){
console.log(`Property: ${property}, Value: ${address4[property]}`);
}

// Object.keys() to count the number of properties
// console.log(`The address object has a length of ${properties.length}`);


// 7.5. Testing for an empty Objects
const blankObject = {name:'Arief'};
delete blankObject.name;
if(Object.keys(blankObject).length === 0){
  // console.log(true);
}


// 7.6. Merging the properties of two Objects
const alamat = {
  country: 'Australia',
  city: 'Sydney',
  streetNum: '412',
  streetName: 'Worcestire Blvrd'
}

const customer = {
  firstName: 'Lisa',
  lastName: 'Stancecki',
  country: 'Indonesia'
}

const customerWithAddress = {...customer, ...alamat};
// property with the same name will overwrite with first props
// console.log(customerWithAddress);


// 7.7 Customizing the way a Property is Defined
// explicitly customize Object
const data = {};

// TYPE
Object.defineProperty(data, 'type',{
  value: 'primary',
  enumerable: true
})
// cant be deleted
// delete data.type;
// console.log(data.type);
// cant be edited
data.type = 'secondary';
// console.log(data.type);
// can be enumerated
for(keys in data){
  // console.log(keys);
}

// ID
Object.defineProperty(data, 'id',{
  value:1,
  writable: true,
  enumerable:false
})
// console.log(data.id);
data.id = 300;
// console.log(data.id);

for(prop in data){
  // console.log(prop);
}
// defineProperty() with accessor getter and setter
const person = {
  firstName: 'Joe',
  lastName: 'Khan',
  dateOfBirth: new Date(2001, 4,11)
}

Object.defineProperty(person, 'age',{
  configurable: true,
  enumerable: true,
  get: function(){
    const today = new Date();
    let age = today.getFullYear() - this.dateOfBirth.getFullYear();
    const monthDiff = today.getMonth() - this.dateOfBirth.getMonth();
    if(monthDiff < 0 ||
      (monthDiff === 0 && todaty.getDate() < this.dateOfBirth.getDate())){
      age -=  1;
    }
    return age;
  }
});
//
// console.log(person.age);


// 7.8. Preventing Any Changes to an Objects
// make sure object iss not change and edited by other code

const cust = {
  firstName: 'Jepeline',
  lastName: 'Led'
}
// freeze the object
Object.freeze(cust);

cust.firstName = 'Akaline';
// not change at all in normal mode
// throws an error in strict mode
// console.log(cust.firstName);

// cant add the new property
cust.middleInitial = 'P';
// either, you cant delete the property
delete cust.lastName;
// console.log(cust);


// Proxy : place certain action outside of Objects
const product = {name: 'banana'};

// handler
const propertyChecker = {
  set: function(target, property, value){
    if(property === 'price'){
      if(typeof value !== 'number'){
        throw new TypeError('price is not a number');
      }
      else if(value <= 0){
        throw new RangeError('price must be greater than zero');
      }
    }else if(property !== 'name'){
      throw new ReferenceError(`property '${property}' not valid`);
    }
    target[property] = value;
  }
}

const proxy = new Proxy(product, propertyChecker);
// can modify
proxy.name = 'apple';
// this throws a ReferenceError
// proxy.type = 'red delicious';
// this throws a TypeError
proxy.price = 'three dollars';
// this throws a RangeError
// proxy.price = -1.00;

// bypas/direct to Objects
product.price = -1.00;
console.log(product.price);


// Cloning an Objects; using spread operator
const animals = {
  name:'Red Fox',
  class: 'Mammalia',
  order: 'Carnivora',
  family: 'Canidae',
  genus: 'Vulpes',
  species: 'Vulpes vulpes'
};

const animalCopy = {...animals};


const student = {
  firstName: 'Tazie',
  lastName: 'Yang',
  testScores: [78,88,94,91,88,96]
}

// const studentCopy = {...student};
//
// student.firstName = 'Dori';
// student.testScores[0] = 100;
// console.log([student,studentCopy]);
// console.log(animalCopy.name);

// Deep Copy of an Object
const student_2 = {
  firstName: 'Classie',
  lastName: 'Cordon',
  testScores:[78,88,94,91,88,96]
}

function cloneStudent(student){
  const studentCopy = {...student_2};
  studentCopy.testScores = [...studentCopy.testScores];
  return studentCopy;
}

const studentCopy = cloneStudent(student_2);
studentCopy.testScores[0] = 56;

console.log(student_2.testScores[0]);
console.log(studentCopy.testScores[0]);


// symbol
const newObj = {};
const uniqueId = Symbol();
newObj[uniqueId] = 'No two alike';

const anotherUniqueId = Symbol();
newObj[anotherUniqueId] = 'This willnt clash either';

console.log(newObj);

// creating enum with Symbol
const TrafficLight = {
  Green: Symbol('green'),
  Red: Symbol('red'),
  Yellow: Symbol('yellow')
}

function switchLight(newLight){
  if(newLight === TrafficLight.green){
    console.log('Turning light green');
  }else if(newLight === TrafficLight.Yellow){
    console.log('Get ready to stop');
  }else{
    console.log('Turning light red');
  }
}

let light = TrafficLight.Red;
light = switchLight(TrafficLight.Yellow)
console.log(light);
