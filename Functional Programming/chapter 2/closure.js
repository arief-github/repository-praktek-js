// another insight for HOF
// source by Eloquent Javascript
/*
Higher-order functions allow us to abstract over actions, not just values.
They come in several forms. For example, we can have functions that create
new functions.
*/

function greatherThan(n) {
  return m => m > n;
}

let greatherThan10 = greatherThan(10);
// console.log(greatherThan10(11));

// function noisy(f) {
//   return (...args) => {
//     console.log("calling with", args);
//     let result = f(...args);
//     console.log("called with", args, ", returned", result);
//     return result;
//   }
// }



// Keeping Scope (closure)
function printMessage(msg) {
  var fn = function inner() {
    return msg.toUpperCase(); // access variables in params
  }

  return fn;
}

var helloFn = printMessage("hello worldie");
// console.log(helloFn());


function person(name) {
  return function identify() {
    console.log(`I am ${name}`);
  }
}

var fred = person("Fred");
var susan = person("Susan");

// console.log(fred());

// update value with closure
function runningCounter(start) {
  var val = start;
  return function current(increment = 1) {
    val = val + increment;
    return val;
  }
}

var score = runningCounter(0);
for (let i = 0; i <= 9; i++) {
  // console.log(score());
}

// function has 2 inputs, one of which you know now but the other
// will be specified later, you can use closure to remember the first input
function makeAdder(x) {
  return function sum(y) {
    return x + y;
  }
}
// first input 10 and 20
var addTo10 = makeAdder(10);
var addTo20 = makeAdder(20);

// later, we specify the second inputs
// console.log(addTo10(2));
// console.log(addTo20(3));


function formatter(formatFn) {
  return function inner(str) {
    return formatFn(str);
  }
}

var lower = formatter(function formatting(v) {
  return v.toLowerCase();
})

var upperFirst = formatter(function formatting(v) {
  return v[0].toUpperCase() + v.substr(1).toLowerCase();
})

console.log(lower("SOUTHGATE"));
console.log(upperFirst("hello"));
