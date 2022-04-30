function* oneDigitPrimes() {
  yield 2;
  yield 3;
  yield 5;
  yield 7;
}

// fibonacci with function generator
// this program may be crash
function* fibonacciSequence() {
  let x = 0,
    y = 1;
  for (;;) {
    yield y;
    [x, y] = [y, x + y];
  }
}

// console.log([...fibonacciSequence()]);


// with care, it is possible to use it for/of loop
function fibonacci(n) {
  for (let fib of fibonacciSequence()) {
    if (n-- <= 0) return fib;
  }
}

// console.log(fibonacci(20));

// this kind of infinite generator becomes more useful with a take()

// yield the first n elements of the specified iterable object
function* take(number, iterable) {
  // get the iterator for iterable object
  let it = iterable[Symbol.iterator]();
  while (number-- > 0) {
    let next = it.next(); // get the next item from the iterator
    if (next.done) return; // if there are no more values, return early
    else yield next.value; // otherwise, yield the value
  }
}

// console.log([...take(5,fibonacciSequence())]);


// interleaves the elements of multiple iterable objects
function* zip(...iterables) {
  let iterators = iterables.map(i => i[Symbol.iterator]());
  let index = 0;
  while (iterators.length > 0) {
    if (index >= iterators.length) {
      index = 0;
    }
    let item = iterators[index].next();
    if(item.done) {
      iterators.splice(index, 1);
    }
    else {
      yield item.value;
      index++;
    }
  }
}

// interleave three iterable objects
// console.log([...zip(oneDigitPrimes(), "ab",[0])]);
