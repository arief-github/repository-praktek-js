// penanganan argumen lebih sebelum ada spread operator
// previous example with spread operator, now use arguments object
function max(x){
  let maxValue = -Infinity;
  for(let i = 0; i < arguments.length; i++){
    if(arguments[i] > maxValue) maxValue = arguments[i];
  }
  return maxValue;
}

console.log(max(1,120,12,34,100,12));
