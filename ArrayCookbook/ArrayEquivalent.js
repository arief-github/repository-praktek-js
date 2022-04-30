// checking arrays have the same even the elements
function areArraysEqual(arrayA, arrayB){
  if(!Array.isArray(arrayA) || !Array.isArray(arrayB)){
    return false;
  }
  else if(arrayA === arrayB){
    return true;
  }
  else if(arrayA.length !== arrayB.length){
    return false;
  }
  else{
    for(let i = 0; i < arrayA.length; ++i){
      if(arrayA[i] instanceof Date && arrayB[i] instanceof Date){
        if(arrayA[i].getTime() !== arrayB[i].getTime()) return false;
      }
      else{
      if(arrayA[i] !== arrayB[i]) return false;
      }
    }
    return true;
  }
}

const datesA = [new Date(2021,1,1)];
const datesB = [new Date(2021,1,1)];
console.log(areArraysEqual(datesA, datesB));



//
// const fruitNamesA = ['apple','kumquat', 'grapefruit','kiwi'];
// const fruitNamesB = ['apple','kumquat', 'grapefruit','kiwi'];
// const fruitNamesC = ['avocado', 'squash', 'red pepper', 'cucumber'];
// console.log(areArraysEqual(fruitNamesA, fruitNamesB));

// use sort
// const fruitNamesA = ['apple', 'kumquat', 'grapefruit', 'kiwi'];
// const fruitNamesB = ['kumquat', 'kiwi', 'grapefruit', 'apple'];
//
// console.log(areArraysEqual(fruitNamesA.sort(), fruitNamesB.sort()));
