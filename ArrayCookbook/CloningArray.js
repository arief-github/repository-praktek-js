const decimal = [1,2,3,4,5,6];
// use spread operator
// const numberCopy = [...decimal];

// use array slice
const numberCopy = decimal.slice();

// console.log(numberCopy);

const objectsOriginal = [{name:'Sadie', age:12},{name:'Patrick', age:18}];
// can modified original array
// const objectCopy = [...objectsOriginal];
//
// objectCopy[0].age = 20;

// use map
// not allow to modify original object
const objectsCopy = objectsOriginal.map(element => ({...element}));
objectsCopy[0].age = 21;
// console.log(objectsOriginal[0].age);
