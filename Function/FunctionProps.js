// length properties
// menghitung parameter dalam fungsi
// untuk rest parameter tidak dihitung
// function func1(a,b,...c){
//
// }
//
// function func2(a,b){
//
// }

// console.log([func1.length, func2.length]);


// name properties
// untuk mengetahui nama fungsi yang sudah didefiniskan
const func1 = function(){};
const object = {
  func2: function(){}
}
// console.log([func1.name, object.func2.name]);

// call()
// function sum(num1, num2){
//   return num1 + num2;
// }
// function callSum(num1, num2){
//   return sum.call(this, num1, num2);
// }
// console.log(callSum(10,10));



// apply()
function sum(num1, num2){
  return num1 + num2;
}
function callSum1(num1, num2){
  return sum.apply(this, arguments)
}
function callSum2(num1, num2){
  return sum.apply(this,[num1,num2]);
}
// console.log(callSum2(10,10));

// bind
function f(y){
  return this.x + y;
}
let o = {x:1};
let stickTogether = f.bind(o);
// console.log(stickTogether(2));

let p = {x:10, stickTogether}
// console.log(p.stickTogether);


// let sum1 = (x,y) => x + y;
// let succ = sum1.bind(null, 1);
// console.log(succ(2));


function fn(y,z){
  return this.x + y + z;
}

let g = fn.bind({x:1},2);
console.log(g(3));
