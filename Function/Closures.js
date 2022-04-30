// scope : kemampuan variable dalam function scope mengakses variable di global scope
let scope = "global scope";

function checkScope() {
  let scope = "local scope";

  function innerScope() {
    return scope;
  }
  return innerScope();
}

// console.log(checkScope());

// let s = checkScope()();
// console.log(s);


// closure and IIFE
let uniqueInteger = (function() {
  let counter = 0;
  return function() {
    return counter++
  }
})();

// console.log(counter);



// function counter(){
//   let n = 0;
//   return {
//     count: function(){return n++},
//     reset: function(){n=0}
//   }
// }
//
// let c = counter() , d = counter();
// let result =[
//   c.count(),
//   c.count(),
//   d.count(),
//   c.reset(),
//   c.count(),
//   d.count(),
// ];
// console.log(result[4]);



// closure adalah kemampuan variabel dalam scope function
//  mengakses variabel terluar dari inner function tersebut
// function compare(val1, val2){
//   if(val1 < val2){
//     return -1;
//   }else if(val1 > val2){
//     return 1;
//   }else{
//     return 0;
//   }
// }
//
// console.log(compare(5,10));



// example with foo bar

// function foo(){
//   var a = "hello lexical";
//   function bar(){
//     return a;
//   }
//   return bar();
// };
// console.log(foo());




// combine closure with getter and setter
function counter(n) {
  return {
    get count() {
      return n++;
    },
    set count(m) {
      if (m > n) n = m;
      else throw Error("count can only be set to a larger value");
    }
  }
}
let c1 = counter(1000);

// console.log(c1.count);

// sharing private properties
// function constfunc(v) {return () => v;}
//
// let funcs = [];
// for(var i = 0; i < 10; i++){
//   funcs[i] = constfunc(i)
// }
//
// console.log(funcs[7]());

// if i declare in var, its global scope
// if i declare in let, its block scope
function constfuncs(){
  let funcs = [];
  for(var i = 0; i < 10; i++){
    funcs[i] = () => i;
  }
  return funcs;
}

let funcs = constfuncs();
console.log(funcs[5]());
