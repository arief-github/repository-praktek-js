// first approach : with function that define elsewhere
const numbers = [1,2,3,4,5,6,7,8,9,10];
function squareNumber(number){
  return number ** 2;
}
const squares = numbers.map(squareNumber);
// console.log(squares);


// second approach : with inline function map
const squareInline = numbers.map(number => number ** 2);
// console.log(squareInline);


// third approach : make it function as value
// if only 1 parameter , you can remove parentheses
const myFunc = number => number ** 2;
const squareNumb = myFunc(10);
// console.log(squareNumb);


// if they have more parameter, use parentheses
const myF = (number, power) => number ** power;


// if the function has many complexicity , use bracket
const mF = inputString => {
  const wordArray = inputString.split(' ');
  const processWordArray = [];
  for(const word of wordArray){
    processWordArray/push(word[0].toUppeCase() + word.slice(1));
  }
return processWordArray.join(' ');
}
