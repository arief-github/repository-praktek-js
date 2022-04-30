const numbers = [1,2,3,4,5,6,7,8,9,10];
// const numbersCopy = [...numbers];
const numbersCopy = numbers.slice();
// console.log(numbersCopy);


const objectOriginal = [{
  name: 'Sadie', age:12
},{
  name: 'Patrick', age:18
}]

// const objectsCopy = [...objectOriginal];
// const arrayCopyObj = objectsCopy[0].age = 14;
// console.log(objectsCopy);


const objectsCopy = objectOriginal.map(element => ({...element}));
objectsCopy[0].age = 14;

console.log(objectOriginal[0].age);
