// const car = {};
// car.type = "sedan";
// car.year = 1990;
//
// Object.defineProperty(car , 'id', {
//   value: 100,
//   writeable: true
// } )
//
// car.id = 120;
//
// for (keys in car) {
//   console.log(keys);
// }

const car = {
  id: 42,
  name: "Arief",
  lastName: "Kurniawan"
}

const copyCar = {...car};
// console.log(copyCar.name);


// Deep copy of an Object
const student = {
  firstName: 'Classie',
  lastName: 'Cordon',
  testScores: [78, 88, 94, 91, 88, 96]
}
// this action will copy student Object
function cloneStudent(student) {
  // copy testScores from here
  const studentCopy = {...student};
  studentCopy.testScores = [...studentCopy.testScores];
  return studentCopy;
}

const studentCopy = cloneStudent(student);
// console.log(student);

//============> proxy handler
const product = {
  name: "banana"
}

 const propertyChecker = {
   set: function(target, property, value) {
     if(property === 'price') {
       if(typeof value !== 'number') {
         throw new TypeError('price is not number');
       }
       else if(value <= 0) {
         throw new RangeError('price must be greater than zero');
       }
     }
     else if(property !== 'name') {
       throw new ReferenceError(`property '${property}' not valid`);
     }
     target[property] = value;
   }
 }


// set a trap proxy when access
const proxy = new Proxy(product, propertyChecker);

// test
// can modify
proxy.name = 'apple';

// this throws a ReferenceError : because property !name
proxy.type = 'red delicious';
// console.log(proxy.type);

// this throw a TypeError
proxy.name= 30;
console.log(proxy.price);
