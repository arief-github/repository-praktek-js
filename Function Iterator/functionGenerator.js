// defining generator function
function* oneDigitPrimes() {
  yield 2;
  yield 3;
  yield 5;
  yield 7;
}

// invoke the generator function
let primes = oneDigitPrimes();

// a generator is an iterator object that iterates the yielded
// (pauses execution) values
console.log(primes.next().value);
console.log(primes.next().value);
console.log(primes.next().value);
console.log(primes.next().value);
console.log(primes.next().done);

// console.log(primes[Symbol.iterator]());

// we can use generators like other iterable types
console.log([...oneDigitPrimes()]);

let sum = 0;
for (let prime of oneDigitPrimes()) {
  sum += prime;
  // console.log(sum);
}

// we can also define generators in expression form
const seq = function*(from, to) {
  for(let i = from;i <= to; i++) {
    yield i;
  }
}

// console.log([...seq(3,5)]);
