const square = function(x){return x*x};

// console.log(square(10));


const f = function fact(x){
  if(x <= 1) return 1;
  else return x*fact(x-1);
}

// console.log(f(10));

let arr = [3,2,1];
let sort = arr.sort(function(a,b) {return a-b});
// console.log(sort);


let tensquared = (function(x){return x*x}(10));
console.log(tensquared);
