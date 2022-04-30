// 7.1.1. Array Literals
let empty = []; //array kosong
let primes = [2,3,5,7,11]; // array dengan 5 numeric
let misc = [1.1, true, "a"]; // array dengan 3 tipe data berbeda

let base = 1024;
let table = [base, base+1, base+2, base+3];
// console.log(table);

// array literals can contain object or other array literals
// let b = [
//   [1,{x:1, y:1}],
//   [2,{x:3, y:4}]
// ];

// array sparse : with multiple commas and no value between
let count = [1,,3];
let undefs = [,,];
// console.log(undefs);


// 7.1.2. The Spread Operator : copyin array
// to include the elements of one array within an array literal
let a = [1,2,3];
let b = [0, ...a,4];

// shallow copy
let original = [1,2,3];
let copy = [...original];
copy[0] = 0;
// console.log([original[0], copy[0]]);

// 7.1.3 Array Constructor
let aConstructor = new Array(10);
// console.log(aConstructor);
let bConstructor = new Array(10,11);
// console.log(bConstructor);

// 7.1.4. Array.of()
let aOf = Array.of();
let bOf = Array.of(10);
let cOf = Array.of(1,2,3);
// different array Constructor and array of when it has one arguments
// console.log([aConstructor,bOf]);


// 7.1.5. Array.from()
// simplest way to copy Array
let copy2 = Array.from(original);
// console.log(copy2);

// 7.2. Reading and Writting Array elements
let emptyArray = [];
emptyArray[1] = "world"; //write element 1
let value = emptyArray[0];
let i = 2; // i untuk index
emptyArray[i] = 3; //write element 2
emptyArray[i + 1] = "hello"; //write element 3
// let print = emptyArray[emptyArray[i]] = emptyArray[0];
// console.log(emptyArray.length);


// 7.3. Sparse Array
let sparse = new Array(5);
sparse = [];
sparse[1000] = 0
// console.log(sparse);


// 7.4. Array.length
// console.log([].length);
// console.log(["a","b","c"].length);

// 7.8 Array Method (lanjutan)
let findArr = [1,2,3,4,5];

// return item
// console.log(findArr.find(x => x === 3));

// return index of item
// console.log(findArr.findIndex(x => x % 5 === 0));

// if no match found
// find return undefined
// console.log(findArr.find(x => x % 7 === 0));

// findIndex return -1
// console.log(findArr.findIndex(x => x % 7 === 0));

// every() and some()
let everyArr = [1,2,3,4,5];
// every: true = must all match
// first is true, second is false
// console.log(everyArr.every(x => x < 10));
// console.log(everyArr.every(x => x % 2 === 0));


// some: true = at least one match
let someArr = [1,2,3,4,5];
// console.log(someArr.some(x => x%2 === 0));
// console.log(someArr.some(isNaN));


// reduce and reduceRight
// reduce is combine element array to produce single value
let reduceArr = [1,2,3,4,5];
console.log(reduceArr.reduce((value, accumulator) => value + accumulator, 0));
console.log(reduceArr.reduce((value, accumulator) => value + accumulator, 1));
console.log(reduceArr.reduce((value, accumulator) => (value > accumulator) ? value : accumulator));

// flattening Array
let tryflatting = [1,[2,3]].flat();
let tryflatting2 = [1,[2,[3]]].flat();
let tryflatting3 = [1,[2,[3,[4]]]];
// console.log(tryflatting3.flat(3));

// array concat : adding arrays/extend value
let arrConcat = [1,2,3];
let connect = arrConcat.concat(4,5);
// console.log(connect);

//subarrays with slice(), splice(), fill(), copyWithin()

// slice() : only remove the array , return sub arrays
let arrSlice = [1,2,3,4,5,6];
// console.log([arrSlice, arrSlice.slice(0,3)]);
// console.log([arrSlice,arrSlice.slice(3)]);
// console.log([arrSlice,arrSlice.slice(1,-1)]);

// splice() : general purpose method for inserting or removing Elements
// spilce() can delete elements from an array, insert new elements into an array,
// or perform both operations at the same time
let arrSplice = [1,2,3,4,5,6,7,8];
// delete
// console.log([arrSplice,arrSplice.splice()]);
// console.log([arrSplice, arrSplice.splice(4)]);
// console.log([arrSplice, arrSplice.splice(1,2)]);
// console.log([arrSplice, arrSplice.splice(1,1)]);
// delete and insert
// console.log([arrSplice, arrSplice.splice(2,0,"a","b")]);
// console.log([arrSplice, arrSplice.splice(2,2,[1,2],3)]);

// fill() array
// first arg is index, second is starting index , third is last index
let an = new Array(5);
let an2 = [];
console.log(an.fill(9,1));
console.log(an.fill(8,2,4));

// copyWithin()
// first args is target index to be copied
// second args is start index, ini penting
// third args is end index
let cw = [1,2,3,4,5];
let array1 = ['a','b','c','d','e'];
// console.log(cw.copyWithin(1));
// console.log(cw.copyWithin(2,3,5));
// console.log(array1.copyWithin(0,2,4));


// Array searching and sorting methods
// indexOf checking from the start
// lastIndexOf checking from end
let searchIndex = [0,1,2,1,5];
// console.log([searchIndex.indexOf(0), searchIndex.lastIndexOf(5)]);

// includes()
// fungsi nya untuk mengecek apakah satu element memiliki item itu didalamnya
// return true or false
let isIncludes = [1,true,3,NaN];
console.log(isIncludes.includes(2));
console.log(isIncludes.includes(NaN));

// sort() : bisa menyusun secara alpabetikal
let sortFruit = ["banana","cherry","apple"];
// console.log(sortFruit.sort());

let sortA = [33,4,1111,222];
//console.log(sortA.sort());
// console.log(sortA.sort((a,b) => a-b));

let animal = ["animal", "Bug","cat","Dog"];
// sort from Alphabet to lowercase
// console.log(animal.sort());
// console.log(animal.sort((s,t) => {
//   let a = s.toLowerCase();
//   let b = t.toLowerCase();
//   if (a < b) return -1;
//   if (a > b) return 1;
//   return 0;
// }));
// reverse()
let areverse = [1,2,3];
// console.log(areverse.reverse());

// 7.8.7. Array to String Conversion
// join() : menyelipkan karakter diantara element array
let arrString = [1,2,3];
// console.log(arrString.join(","));

let convertToString = [1,2,3];
let alphabetToString = ["a","b","c"];
let arrWithinToString = [1,[2,"c"]];
// console.log(arrWithinToString.toString());


// Array-like-Object
let alo = {"0":"a", "1":"b", "2":"c", length: 3};
// focus here
// Array.prototype.join.call(alo, "+");
// Array.prototype.map.call(alo, x => x.toUpperCase());
// Array.prototype.slice.call(alo,0);


// Strings as arrays
let str = "test";
console.log(str.charAt(0));
