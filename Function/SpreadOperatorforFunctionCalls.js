// menggunakan spread operator saat pemanggilan
let numbers = [5,2,10,-1,9,100,1];

let result = Math.min(...numbers);
// console.log(result);


// function timed(f){
//   return function(...args){
//     console.log(`Entering function ${f.name}`);
//     let startTime = Date.now();
//   }
//   try{
//     return f(...args);
//   }finally{
//     console.log(`Exiting ${f.name} after ${Date.now()-startTime}ms`);
//   }
// }
//



let arr = [1,2,3,4];
// let arr2 = [...arr];
// console.log(arr2);
