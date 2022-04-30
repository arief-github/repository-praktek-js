// any code that might possibly throw an error should be placed in try
// the code handle the error is placed in the catch portion
// finally keyword always run.
// try {
//   window.someNonExistentFunction();
// } catch (error) {
//   console.log(error.message);
// } finally {
//   console.log("Try catch operation done");
// }


function testFinally() {
  try {
    return 2;
  } catch (e) {
    return 1;
  }
  // finally {
  //   return 0;
  // }
}

// let result =testFinally();
// console.log(result);


// ErrorType
// ReferenceError
// let obj = x;
// RangeError
// let items = new Array(Number.MAX_VALUE);
// SyntaxError
// let x = 10;
// let y = 20;
// let res = eval("x * y");
// console.log(res);


// TypeError
// let o = new 10;
// console.log("name" in true);
// Function.prototype.toString.call("name");


// Throwing Errors
throw "Hello World";
// throw new TypeError("Something bad happened");
// throw new SyntaxError("Something bad happened");
// throw new RangeError("Something bad happened");
// throw new EvalError("Something bad happened");
// throw new ReferenceError("Something bad happened");
