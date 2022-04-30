// a higher-order function is a function that operates on function
function not(f) {
  return function(...args) {
    let result = f.apply(this, args);
    return !result;
  }
}

const even = x => x % 2 === 0;
const odd = not(even);
// console.log([1,1,3,5,5].every(odd));

function compose(f, g) {
  return function(...args) {
    return f.call(this, g.apply(this, args));
  }
}

const sum = (x, y) => x + y;
const square = x => x * x;
const result = compose(square, sum)(3, 3);
// console.log(result);


// partial function app
function partialLeft(f, ...outerArgs) {
  return function(...innerArgs) {
    let args = [...outerArgs, ...innerArgs];
    return f.apply(this, args);
  }
}

function partialRight(f, ...outerArgs) {
  return function(...innerArgs) {
    let args = [...innerArgs, ...outerArgs];
    return f.apply(this, args);
  }
}

function partial(f, ...outerArgs) {
  return function(...innerArgs) {
    let args = [...outerArgs];
    let innerIndex = 0;
    for (let i = 0; i < args.length; i++) {
      if (args[i] === undefined) args[i] = innerArgs[innerIndex++];
    }
    args.push(...innerArgs.slice(innerIndex));
    return f.apply(this, args);
  }
}
const f = function(x, y, z) {
  return x * (y - z);
};
// let resultLeft = partialLeft(f, 2)(3,4);
// let resultRight = partialRight(f,2)(3,4);
// let resultPartial = partial(f, undefined, 2)(3,4);
// console.log([resultLeft, resultRight, resultPartial]);

// const notPart = partialLeft(compose, x => !x);
// const evenPart = x => x % 2 === 0;
// const oddPart = notPart(evenPart);
// const isNumber = not(isNaN);
// console.log(oddPart(3) && isNumber(2));

// const product = (x, y) => x * y;
// const neg = partial(product, -1);
// const sqrt = partial(Math.pow, undefined, .5);
// const reciprocal = partial(Math.pow, undefined, neg(1));
//
// let data = [1, 1, 3, 5, 5];
// let mean = product(reduce(data, sum), reciprocal(data.length));
// let stddev = sqrt(product(reduce(map(data,
//       compose(square,
//         partial(sum, neg(mean)))),
//     sum),
//   reciprocal(sum(data.length, neg(1)))));

// memoize
function memoize(f){
  const cache = new Map();
  return function(...args){
    let key = args.length + args.join("+");
    if(cache.has(key)){
      return cache.get(key);
    }else{
      let result = f.apply(this, args);
      cache.set(key, result);
      return result;
    }
  }
}
function gcd(a,b){
  if(a < b){
    [a,b] = [b,a];
  }
  while(b != 0){
    [a,b] = [b, a%b];
  }
  return a;
}

const gcdmemo = memoize(gcd);
console.log(gcdmemo(25, 50));
