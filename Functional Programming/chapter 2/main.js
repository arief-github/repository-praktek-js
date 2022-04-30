// Function Input : function that takes input always have a return value for output
function countNumber(x, y) {
  return x + y;
}

// console.log(countNumber(10,20));


// default params : print x when no arguments were passed
function countNumberDef(x = 3) {
  console.log(x);
}

// countNumberDef();

// counting inputs


function counting(x, y, z) {
  return x + y * z;
}

// if (counting.length === 1) {
//   counting(x);
// } else if (counting.length === 2) {
//   counting(undefined,x);
// } else if (counting.length === 3) {
//   counting(undefined, undefined,x);
// }

// console.log(counting.length);

function foo(x, y = 2) {
  return x + y;
}


// rest parameters/spread operator
/*
tells the
engine to collect (ahem, “gather”) all remaining arguments (if any) not assigned to
named parameters, and put them in a real array named args. args will always be
an array, even if it’s empty. But it will not include values that are assigned to the
x, y, and z parameters, only anything else that’s passed in beyond those first three
values
*/

function baz(x, y, z, ...args) {
  console.log(x, y, z, args);
}

let res = baz(2, 3, 4, 5, 6, 7, 7);
// console.log(res);

// Arrays of Arguments
function countingArrays(...args) {
  console.log(args[4]);
}

let arr = [1, 2, 3, 4, 5, 6];
// countingArrays(...arr);


// Destructuring parameters
// Destructuring Arrays
function desParam([x, y, ...args] = []) {
  return [x, y, ...args];
}

// let results = desParam([1,2,3]);
// console.log(results);


// Destructuring Object
function descObj({
  x,
  y
} = {}) {
  console.log(x, y);
}

// descObj({
//   x:2,
//   y:3
// })


// Function Output
function printNothing() {
  console.log("Im calling the function");
}

// printNothing();

// compound return values
function returningTwoVal() {
  var [value1, value2] = [11, 21];
  return [value1, value2];
}

let [x, y] = returningTwoVal();
// console.log(x + y);

// returns in control flow
function foo(x) {
  if (x > 10) return x + 1;
  var y = x / 2;
  if (y > 3) {
    if (x % 2 === 0) return x;
  }
  if (y > 1) return y;
  return x;
}

let results = foo(4);
// console.log(results);

function checkingNumber(x) {
  var retValue;

  if (retValue === undefined && x > 10) {
    retValue = x + 1;
  }

  var y = x / 2;

  if (y > 3) {
    if (retValue === undefined && x % 2 === 0) {
      retValue = x;
    }
  }

  if (retValue === undefined && y > 1) {
    retValue = y;
  }

  if (retValue === undefined) {
    retValue = x;
  }

  return retValue;
}

// un returned outputs : like f(x) = 2x+3
function f(x) {
  return (2 * Math.pow(x, 2) + 3);
}
var printY = f(2);
// console.log(printY);

function sum(list) {
  var total = 0;
  for (let i = 0; i < list.length; i++) {
    if(!list[i]) list[i] = 0; // if array is empty
    total += list[i];
  }
  return total;
}

var nums = [1,3,9,27,,84];
var show = sum(nums);
// console.log(show);

// Functions of Functions : higher order function
// higher order function receives a function as an argument
function forEach(list, fn) {
  for(let v of list){
    fn(v);
  }
}

// forEach([1,2,3,4,5], function each(val) { console.log(val) });

function printMsg() {
  return barMsg( function inner(msg) {
    return msg.toUpperCase();
  });
}

function barMsg(func) {
  return func("Hello!");
}

// var print = printMsg();
// console.log(print("Hello!"));

// console.log(printMsg());
