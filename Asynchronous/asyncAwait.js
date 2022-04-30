// async always return a Promise
// explcit promise
// async function f(){
//   return new Promise(resolve => resolve(1))
// }
// let result = f();
// result.then(console.log)

// implicit promise
// async function f(){
//   return 1;
// }
//
// f().then(console.log);

// Await
// async function f() {
//   let promise = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("done"), 3000)
//   })
//
//   let result = await promise;
//   console.log(result);
// }
//
// f().then(console.log);

// async can declare on function declaration, function expressions, arrow functions and methods
// async function foo(){}
// let bar = async function(){}
// let baz = async() => {}
// class Qux{
//   async qux(){}
// }

// async function foo(){
//   console.log(1);
// }
// let result = foo();
// console.log(result);
// console.log(2);

// async always return a promise
// async function foo(){
//   console.log(1);
//   return 3;
//   return Promise.resolve(3);
// }
//
// foo().then(console.log);
// console.log(2);


// thenable and non-thenable
// return a primitive
// async function foo(){
//   return 'foo';
// }
// foo().then(console.log);

// return a non-thenable object
async function bar() {
  return ['bar'];
}

// bar().then(console.log);

// return a thenable non-promise object
async function baz() {
  const thenable = {
    then(callback) {
      callback('baz');
    }
  }
  return thenable;
}
// baz().then(console.log);

// return a promise
async function qux() {
  // return Promise.resolve('qux');
  return 'qux';
}
// qux().then(console.log);

// as with promise handler functions, throwing an error value will instead return a rejected Promise
// Promise rejection error will not be captured by the async function
// async function foo(){
//   console.log(1);
//   throw 3;
//   Promise.reject(3);
// }

// foo().catch(console.log);
// console.log(2);


// await
// let p = new Promise((resolve, reject) => setTimeout(resolve, 3000, 3));
// p.then((x) => console.log(x));

// async function foo(){
//   let p = new Promise((resolve, reject) => setTimeout(resolve, 1000,3));
//   console.log(await p);
// }

// foo();

// Asynchronously print 'foo'
// async function foo(){
//   console.log(await Promise.resolve('foo'));
// }
// foo();

async function bar() {
  return await Promise.resolve('bar');
}

// bar().then(console.log)

async function baz() {
  await new Promise((resolve, reject) => setTimeout(resolve, 1000));
  console.log('baz');
}
// baz();

// async function foo(){
//   console.log(1);
//   await (() => {throw 3;})();
// }
//
// foo().catch(console.log);


// 4 never print
// async function foo(){
//   console.log(1);
//   await Promise.reject(3);
//   console.log(4);
// }
// foo().catch(console.log);
// console.log(2);


// Restrictions on await
// await must be used inside an async function
// IIFE on await
// (async function(){
//   console.log(await Promise.resolve(3));
// })();

// Halting and Resuming execution
// async function foo() {
//   console.log(await Promise.resolve('foo'));
// }
// async function bar() {
//   console.log(await 'bar');
// }
// async function baz() {
//   console.log('baz');
// }
//
// foo()
// bar()
// baz()

// async function foo(){
//   console.log(2);
//   await null;
//   console.log(4);
// }
//
// console.log(1);
// foo();
// console.log(3);

// async function foo(){
//   console.log(2);
//   console.log(await Promise.resolve(8));
//   console.log(9);
// }
//
// async function bar(){
//   console.log(4);
//   console.log(await 6);
//   console.log(7);
// }
//
// console.log(1);
// foo();
// console.log(3);
// bar();
// console.log(5);

// Strategies for Async functions
// implementing sleep
// async function sleep(delay){
//   return new Promise((resolve) => setTimeout(resolve, delay));
// }
//
// async function foo(){
//   const to = Date.now();
//   await sleep(1500);
//   console.log(Date.now() - to);
// }
//
// foo()

// maximizing parallelization
async function randomDelay(id) {
  const delay = Math.random() * 1000;
  return new Promise((resolve) => setTimeout(() => {
    console.log(`${id} finished`);
    resolve(id)
  }, delay));
}

async function foo() {
  const to = Date.now();
  // await randomDelay(0);
  // await randomDelay(1);
  // await randomDelay(2);
  // await randomDelay(3);
  // await randomDelay(4);

  // for(let i = 0; i < 5; ++i){
  //   await randomDelay(i);
  // }

  const promises = Array(5).fill(null).map((_, i) => randomDelay(i));
  for (const p of promises) {
    console.log(`awaited ${await p}`);
  }
  console.log(`${Date.now() - to}ms elapsed`);
}

// foo()


// Serial Promise execution
function addTwo(x) {
  return x + 2;
}

function addThree(x) {
  return x + 3;
}

function addFive(x) {
  return x + 5;
}

async function addTen(x) {
  for (const fn of [addTwo, addThree, addFive]) {
    x = await fn(x);
  }
  return x;
}


// addTen(9).then(console.log);

// Stack trace and Memory management
function fooPromiseExecutor(resolve, reject){
  setTimeout(reject, 1000, 'bar');
}

async function foot(){
  await new Promise(fooPromiseExecutor);
}

foot();
