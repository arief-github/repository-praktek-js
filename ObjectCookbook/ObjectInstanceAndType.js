// check object determine its type
const mysteryObject = new Date(2021, 11,11);

// if(mysteryObject instanceof Date){
//   console.log('valid');
// }else if(!(mysteryObject instanceof Date)){
//   console.log('not valid');
// }

// one line
// let condition = mysteryObject instanceof Date ? 'valid' : 'not valid';
// console.log(condition);

// instanceof doesn't work with primitive value, like numbers, strings, booleans, BigInt
const testNumber = 42;
if(testNumber instanceof Number){
  console.log('valid'); // this code never runs
}

const testString = "Hello";
if(testString instanceof String){
  console.log('valid'); //this code never runs
}

// solution is use typeof, it works for primitive value
const mysteryPrimitive = 42;

let holdValue = typeof mysteryPrimitive === 'number' ? "valid" : "not valid";
console.log(typeof mysteryObject === 'object');
