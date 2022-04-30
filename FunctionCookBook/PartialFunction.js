// Induk Fungsi
function partial(fn, ...argsToApply){
  return function(...restArgsToApply){
    return fn(...argsToApply, ...restArgsToApply);
  }
}


function raiseToPower(exponent, number){
  return number ** exponent;
}

// !! Bold this concept
const cubeIt = partial(raiseToPower, 3);
// console.log(cubeIt(9));


function makeString(prefix, suffix, str){
  return prefix + str + suffix;
}


// !! Bold this concept
const namedEntity = partial(makeString, "&#", ";");
// console.log(namedEntity(169));


// bind() method
const named = makeString.bind(undefined, "&#",";");
console.log(named(169));
