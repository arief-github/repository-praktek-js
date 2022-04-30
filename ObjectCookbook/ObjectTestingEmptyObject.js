// determine if an object is empty
const blankObject = {};

if(Object.keys(blankObject).length === 0){
  console.log('this code run because theres nothing prop in object');
}

const objectWithProperty = {price:47.99};
if(Object.keys(objectWithProperty).length === 0){
  console.log('this code wont run, because object isnt empty');
}
