// costumize props explicitly
const data = {};

Object.defineProperty(data, 'type',{
  value: 'primary',
  enumerable: true
})

// type : Initial value set and can’t be changed, can’t be deleted or modified, but can be
//enumerated

console.log(data.type);
data.type = "secondary";
// nope, still primary
console.log(data.type);


// id : Initial value set, but can be changed, can’t be deleted or modified, and can’t be
// enumerated

Object.defineProperty(data, 'id',{
  value:1,
  writable : true
})

// change this modifiable props
console.log(data.id);
data.id = 300;
console.log(data.id);



for(prop in data){
  console.log(prop);
}


// object freeze
let obj = {
  foo: 'foo',
  bar: [1,2,3],
  baz : {
    foo: 'nested-foo'
  }
}
// Object.freeze(obj);
// obj.name = "Arief";
// delete obj.foo;
// console.log(obj);


// accessor getter and setter
const person = {
  firstName: 'Joe',
  lastName: 'Khan',
  dateOfBirth: new Date(2001, 4,11)
};

Object.defineProperty(person, 'age', {
  configurable: true,
  enumerable: true,
  get: function() {
    const today = new Date();
    let age = today.getFullYear() - this.dateOfBirth.getFullYear();

    // const monthDiff = today.getMonth() - this.dateOfBirth.getMonth();
    // if(monthDiff < 0 || (monthDiff === 0 && today.getDate() < this.dateOfBirth.getDate())){
    //   age -= 1;
    // }
    return age;
  }
})

console.log(person.age);
