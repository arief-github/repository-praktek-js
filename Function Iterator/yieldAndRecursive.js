// yields the elements of multiple iterable objects sequentially
function* oneDigitPrimes() {
  yield 2;
  yield 3;
  yield 5;
  yield 7;
}

// function* sequence(...iterables) {
//   for(let iterable of iterables) {
//     for(let item of iterable) {
//       yield item;
//     }
//   }
// }

// console.log([...sequence("abc", oneDigitPrimes())]);

// yield* keyword iterates an iterable object and yields each of resulting value

function* sequence(...iterables) {
  for(let iterable of iterables) {
    yield* iterable;
  }
}
// console.log([...sequence("abc", oneDigitPrimes())]);
