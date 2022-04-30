function addNumbers(firstNum, secondNum, thirdNum=0){
  return firstNum+secondNum+thirdNum;
}
// console.log(addNumbers(42,6,10));
function addNumbers(firstNum=10, secondNum=20, thirdNum=30, multiplier=1){
  return multiplier*(firstNum+secondNum+thirdNum);
}

// make function as value
let sum = addNumbers;
// undefined make param omit the third parameter
// console.log(sum(42,10,undefined,1));
console.log(sum(42,10,null,1));
