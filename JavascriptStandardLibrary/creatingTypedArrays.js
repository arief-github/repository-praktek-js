/*
The simplest way to create a type array is to call apropriate
constructor with one numeric argument that specifies the Number
of elements you want in the array
*/

// 1024 bytes
let bytes = new Uint8Array(1024);
// console.log(bytes);

// sebuah matrix 3x3
let matrix = new Float64Array(9);
// console.log(matrix);

// a point in 3d space
let point = new Int16Array(3);
// console.log(point);

// a 4 byte RGBA pixel values
let rgba = new Uint8ClampedArray(4);
// console.log(rgba);

// a 9x9 sudoku board
let sudoku = new Int8Array(81);
// console.log(sudoku);

// typed array constructor has static from(), of()
// like Array.from() and Array.of()
let white = Uint8ClampedArray.of(255,255,255,0);
// console.log(white);

// from() factory allows you to copy existing typed array
// let ints = Uint32Array.from(white);
// console.log(ints);


// Floats truncated to ints
let truncated = Uint8Array.of(1.99,2.99,45000);
// console.log(truncated);

// there is one more way to create typed arrays
//ArrayBuffer
let buffer = new ArrayBuffer(1024*1024);
// console.log(buffer.byteLength);

let asbytes = new Uint8Array(buffer);
let asints = new Int32Array(buffer);
let lastK = new Uint8Array(buffer, 1023 * 1024);
let ints2 = new Int32Array(buffer, 1024, 256);
// console.log(ints2);

// Typed arrays are not true arrays, but they re-implement most array methods
let ints = new Int16Array(10);
// let result = ints.fill(3).map(x => x*x).join("");
// console.log(result);


// Typed Array Methods and Properties
// The set() method sets multiple elements of a typed array
let bytes1 = new Uint8Array(1024); // a 1k buffer
let pattern = new Uint8Array([0,1,2,3]); // an array of 4 bytes
// Copy them to the start of another byte array
// bytes1.set(pattern);
// Copy them again at a different offset
// bytes1.set(pattern, 4);
// bytes1.set([0,1,2,3],8);
let result = bytes1.slice(0,12);
// console.log(result);

// Typed arrays also have a subarray method
// returns a portion of the array on which it is called
let ints16 = new Int16Array([0,1,2,3,4,5,6,7,8,9]);
let last3 = ints16.subarray(ints.length-3, ints.length);
// console.log(last3[0]);
