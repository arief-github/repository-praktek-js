const sum = (x,y) => {return x+y};

// console.log(sum(10,10));

// arrow function can omit the return statement
const times = (x,y) => x*y;
// console.log(times(20,21));

// futhermore, you can omit the parentheses around the parameter list
const polynomial = x => x*x + 2*x + 3;

// with no arguments
const constantfunc = () => 42;


// bad code
// const name = x
// =>


// concise syntax of arrow functions makes them ideal when you need
// to pass one function to another function
// which is common thing to do with array methods
// like map(), filter(), reduce()


let filtered = [1,2,3,4,5].filter(x => x % 2 === 1);
console.log(filtered);

let mapped = filtered.map(x => x + 1);
console.log(mapped);
