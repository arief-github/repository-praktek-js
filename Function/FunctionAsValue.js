function square(x){
  return x*x;
}

// fungsi bisa digunakan sebagai nilai dalam variabel
// let s = square(4);
// let s = square;

// console.log(s(4));

// fungsi bisa dimasukkan ke object, kita memanggilnya sebuah 'method'
let object = {square: function(x){return x*x}};
let y = object.square(16);
// console.log(y);


// fungsi tidak membutuhkan nama sama sekali ketika dimasukkan ke array
let arr = [x => x*x, 20];
// console.log(arr[0](arr[1]));


// another example going to be tricky
let add = (x,y) => x+y;
let subtract = (x,y) => x-y;
let multiply = (x,y) => x*y;
let divide = (x,y) => x/y;

function operate(operator, operand1, operand2){
  return operator(operand1, operand2);
}

let i = operate(add, operate(add, 2,3), operate(multiply, 4,5));
let j = operate(divide, operate(add, 1,2), operate(add, 1,2));
// console.log([i,j]);


// for the sake example, we implement the simple functions again
// this time within an object literlal

const operators = {
  add: (x,y) => x+y,
  subtract: (x,y) => x-y,
  multiply: (x,y) => x*y,
  divide: (x,y) => x/y,
  pow: Math.pow
}

function newOperate(operation, operand1, operand2){
  if(typeof operators[operation] === 'function'){
    return operators[operation](operand1, operand2);
  }
  else throw "unknown operator";
}

let res = newOperate("add", "hello", newOperate("add", "","world"));
console.log(res);
