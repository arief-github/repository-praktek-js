// function model
const reducerFunction = function(acc, el) {
  const newTotal = acc + el;
  return newTotal;
}

// let reducer = reducerFunction(10,20);
// console.log(reducer);


// reduce() method
const numbers = [23,255,122,5,16,99];
const total = numbers.reduce((acc, el) => acc + el);
const totalSquares = numbers.reduce((acc, val) => acc + val ** 2, 0);

// const simplenum = [1,2,3,4,5];
// const sum = simplenum.reduce((acc, val) => acc + val, 2);
// console.log(sum);


const average = numbers.reduce((acc, val) => acc + val,0) / numbers.length;
const max = numbers.reduce((acc, val) => acc > val? acc:val);
// console.log(average);


const maxnum = Math.max(numbers);
console.log(maxnum);
