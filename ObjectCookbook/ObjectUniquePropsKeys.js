// Symbol
// const newObj = {};
//
// const uniqueId = Symbol();
// newObj[uniqueId] = 'no two alike';
//
// const anotherUniqueId = Symbol();
// newObj[anotherUniqueId] = 'this will not clash, either';
//
// console.log(newObj[uniqueId]);


const newSymbol = Symbol();
const anotherSymbol = Symbol('label');
const yetAnotherSymbol = Symbol('label');
// console.log(typeof newSymbol === 'symbol');
console.log(yetAnotherSymbol === anotherSymbol); //false
