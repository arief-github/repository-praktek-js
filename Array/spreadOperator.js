// let a = [1,2,3,5,6];
// let b = [0,...a,4];
// console.log(b);


let original = [1,2,3];
let copy = [...original];
// modifying copy does not change the original
copy[0] = 0;
// console.log(original);

let digits = [..."0123456789ABCDEF"];
// console.log(digits);

// remove duplictae elements
let letters = [..."hello world"];
let callSet = new Set(letters);
// console.log(callSet);
