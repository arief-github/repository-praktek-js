// array literal
// let arr = [];
// arr[0] = "arief";
// arr[1] = "kurniawan";
// console.log(arr);
// let primes = [2,3,5,7,11];
// let extra = ["name", true, 11];
//
//
// let base = 1024;
// let arrBase = [base+1, base+2, base+3];
// console.log(arrBase);


// let b = [
//   [1, {
//     x:1,
//     y:2
//   }],[2,{
//       x:1,
//       y:2
//     }
//   ]
// ];
//
// console.log(b);

// array literal sparse : comma with no values between
// let arr = [1,,3];
// console.log(arr);



// keyword new array
let a = new Array(10);
// a[0] = 1;
// console.log(a);
// console.log(a);

// let arr = new Array(5,4,3,2,1, "testing, testing");
// console.log(arr.length);

// array of
let b = Array.of(10);
// console.log(a);


// array from
let original = [1,12,13,10,1];
let copy = Array.from(original);
console.log(copy);
