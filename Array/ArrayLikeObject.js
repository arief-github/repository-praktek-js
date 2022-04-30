// start with a regular empty object
// let a = {};
// add properties to make it array-like
// let i = 0;
// while(i < 10){
//   a[i] = i * i;
//   i++;
// }
// a.length = i;
// console.log(a);
//
// let total = 0;
// for(let j = 0; j < a.length; j++){
//   total += a[j];
// }
//
// console.log(total);


// let arr = [1,2,3,4,5,7];
// arr.length = 2;
// console.log(Array.isArray(arr));

// array like objects
let a = {"0" : "a", "1":"b","2":"c", length:3};
// cannot invoke them directly : below is wrong example
// console.log(a.join("+"));

// use Array.Prototype and call method
let joinWithCall = Array.prototype.join.call(a,"+");
let mapWithCall = Array.prototype.map.call(a, x => x.toUpperCase());
let sliceWithCall = Array.prototype.slice.call(a, 0);
console.log(sliceWithCall);
