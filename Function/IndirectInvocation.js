function returningThisGreet(arg1, arg2){
  return this.greeting + ' ' + arg1 + ' ' + arg2;
}


// let connectingToFunction = returningThisGreet.apply({greeting: 'Good Morning'}, ['John', 'Doe']);
// console.log(connectingToFunction);

let bindingConnection = returningThisGreet.bind({greeting: 'Good Morning'})
// console.log(returningThisGreet('John', 'Doe'));


// invoking with apply
// function sum(num1, num2){
//   return num1 + num2;
// }
//
// function callSum1(num1, num2){
//   return sum.apply(this, arguments);
// }
//
// function callSum2(num1, num2){
//   return sum.apply(this, [num1, num2]);
// }
// console.log(callSum2(10,10));


function divide(val2){
  return this.val1/val2;
}

function applyDivide(val1, val2){
  return divide.apply(this, [val1, val2]);
}

function callDivide(val1, val2){
  return divide.call(this, val1, val2);
}

let obj = {
  val1: 10
}

// let result = applyDivide(10,2);
// terciptalah fungsi baru
let bindingHere = divide.bind(obj);
let user = {
  firstName: "John"
}
function func(){
  console.log(this.firstName);
}
let funcUser = func.bind(user);
console.log(funcUser());


// invoking with call
function sum(num1, num2){
  return num1 + num2;
}

function callSum(num1, num2){
  return sum.call(this, num1,num2);
}

// console.log(callSum(10,10));
