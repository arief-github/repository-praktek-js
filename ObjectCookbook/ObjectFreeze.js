// 'use strict';
// make sure that its properties arent redefined or edited  by other code
const customer = {
  firstName: 'Josephine',
  lastname: 'Stanecki'
}

// freeze the object
// Object.freeze(customer);

// cant be adding one prop, also delete.
// customer.middleInitial = 'p';
// delete customer.lastname;
//
// console.log(customer);


// three ways to lockdown your object
// Object.seal(customer);
//
// customer.middleInitial = 'p';

// console.log(customer.middleInitial);
 //undefined
// Object.defineProperty(customer, 'foo' , {
//   get: function() {return 'newFoo'}
// })


let myObject = {name: 'myname'};
// Object.seal(myObject);
// Object.preventExtensions(myObject);
Object.freeze(myObject);
myObject.name = 'khan';
console.log(Object.isFrozen(myObject));
