// rest parameter allow us to write function can be invoked
// with arbitrarily more arguments than parameters

function max(first=-Infinity, ...rest){
  let maxValue = first;
  for(let n of rest){
    if(n > maxValue) maxValue = n;
  }
  return maxValue;
}

let result = max(1,100,200,4,5,12,10);
// console.log(result);


// another example
function getSum(...values){
  // sequentially sum all elements in 'values'
  return values.reduce((x,y) => x+y, 0);
}

console.log(getSum(1,2,3,4,5,6,7));
