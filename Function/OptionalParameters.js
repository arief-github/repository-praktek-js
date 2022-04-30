function getPropertyNames(o, a){
  if(a === undefined) a = [];
  for(let property in o) a.push(property);
  return a;
}

let oneObject = {x:1};
let moreObjects = {y:2,z:3};

let printResult = getPropertyNames(oneObject);
console.log(printResult);


// jika hanya ada satu parameter dan kita memberi argumen lebih
// maka argumen selebihnya akan diabaikan

let square = x => x * x;
// console.log(square(10, 'squexee','oak'));


// program jika parameter b itu tidak kita masuki
function compute(a,b){
  if (b === undefined) return -a;
  else return a-b;
}

// console.log(compute(5));


// jika kita menulis = setelah parameter diikuti ekspresi
// nilai akan dipakai jika parameter tidak dimasuki

function power(base, exponent = 2){
  let result = 1;
  for(let count = 0; count < exponent; count++){
    result *= base;
  }
  return result;
}
// pangkat 2
console.log(power(5));
