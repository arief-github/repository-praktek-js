// hoisting assignment
uniqueInteger.counter = 0;

function uniqueInteger(){
  return uniqueInteger.counter++;
}

// for(let i = 0; i <= 10; i++){
//   let result = uniqueInteger();
//   console.log(result);
// }


// lets see another example
function factorial(n){
  if(Number.isInteger(n) && n > 0){
    if(!(n in factorial)){
      factorial[n] = n * factorial(n-1);
    }
    return factorial[n];
  }else{
    return NaN;
  }
}
factorial[1] = 1;
let faktorial6 = factorial(5);
// console.log(faktorial6);



// iife

// (function () {
//   for(var i = 0; i <= 10; i++){
//     console.log(i);
//   }
// })();
//
// console.log(i);


// inline block scope
// {
//   let i;
//   for(i = 0;i <= 10; i++){
//   console.log(i);
//   }
// }
// console.log(i);
