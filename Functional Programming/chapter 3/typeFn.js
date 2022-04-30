// all for one : disebut juga callback hell
function unary(fn) {
  return function onlyOneArg(arg) {
    return fn(arg)
  }
}

let res = ["1","2","3"].map(unary(parseInt))
// console.log(res);


// one on one
function identity(v) {
  return v;
}

let words = " Now is the time for all...  ".split(/\s|\b/);
let filterWords = words.filter(identity)
// console.log(filterWords);

function output(msg, formatFn = identity) {
  msg = formatFn(msg);
  console.log(msg);
}

function upper(txt) {
  return txt.toUpperCase();
}

let format1 = output("Hello world", upper);
let format2 = output("Hello world");
// console.log([format1,format2]);


// unchanging one
// p1.then(foo).then(() => p2).then(bar);

// adapting parameters to arguments
function foo(x,y) {
  console.log(x + y);
}

function bar(fn) {
  fn([3,9]);
}

// var spreadArgs = fn => argsArr => fn(...argsArr);

function spreadArgs(fn) {
  return function spreadFn(argsArr) {
    return fn(...argsArr);
  }
}

// bar(spreadArgs(foo));




// gathered args
function combineFirstTwo([v1, v2]) {
  return v1+v2;
}

// function gatherArgs(fn) {
//   return function gatheredFn(...argsArr) {
//     return fn(argsArr);
//   }
// }

var gatherArgs = fn => (...argsArr) => fn(argsArr);

[1,2,3,4,5].reduce(gatherArgs(combineFirstTwo))

// order matters
function partialProps(fn, presetArgsObj) {
  return function partiallyApplied(laterArgsObj){
    return fn(Object.assign({}, presetArgsObj, laterArgsObj))
  }
}


function curryProps(fn, arity = 1) {
  return (function nextCurried(prevArgsObj){
    return function curried(nextArgObj = {} ) {
      var [key] = Object.keys(nextArgObj);
      var allArgsObj = Object.assign(
        {}, prevArgsObj, {[key]: nextArgObj[key]}
      );
      if(Object.keys(allArgsObj).length >= arity) {
        return fn(allArgsObj);
      }else{
        return nextCurried(allArgsObj);
      }
    }
  })({});
}

function foo({x,y,z} = {}) {
  console.log(`x: ${x} y: ${y} z: ${z}`);
}

var f1 = curryProps(foo, 3);
// console.log(f1({y:2})({x:1})({z:3}));


// no points
function double(x) {
  return x * 2;
}

// [1,2,3,4,5].map(function mapper(v) {
//   return double(v);
// })

[1,2,3,4,5].map(double);
