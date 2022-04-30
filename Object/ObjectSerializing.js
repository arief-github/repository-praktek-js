// Objects, arrays, strings, finite numbers, true, false, and null are supported and
//can be serialized and restored.
// can be serialized and restored. NaN, Infinity, and -Infinity are serialized to null.
let o = {x:1, y:{z: [false, null, ""]}};
let r = {x: Infinity, y:NaN}
// konversi dari object biasa kedalam notasi json
let s = JSON.stringify(r);
// konversi dari notasi json kedalam object biasa
// let p = JSON.parse(s);
// console.log(s);

const identity = {
  name: "Arief",
  lastName: "Kurniawan",
  fullName(){
    return name + " " + lastName
  },
  health: Infinity
}
// function, regexp, error cant be serialized
let convertToJSON = JSON.stringify(identity);
console.log(convertToJSON);
