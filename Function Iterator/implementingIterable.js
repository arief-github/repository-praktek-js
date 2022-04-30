let iterable = [99];
let iterator = iterable[Symbol.iterator]();
for(let result = iterator.next(); !result.done; result = iterator.next()){
  // console.log(result.value);
}

let list = [1,2,3,4,5];
let iter = list[Symbol.iterator]();
// Symbol.iterator can paused execution
// console.log(iter.next().value);
// console.log(iter.next().value);

// but , you can iterate with spread
// console.log([...iter]);

class Range {
  constructor(from, to) {
    this.from = from;
    this.to = to;
  }

  // Make a Range act like a Set of numbers
  has(x) { return typeof x === "number" && this.from <= x && x <= this.to; }
  // Return string representation of the range using set notation
  toString() { return `{ x | ${this.from} ≤ x ≤ ${this.to} }`; }

  [Symbol.iterator]() {
          // Each iterator instance must iterate the range independently of
          // others. So we need a state variable to track our location in the
          // iteration. We start at the first integer >= from.
          let next = Math.ceil(this.from);  // This is the next value we return
          let last = this.to;               // We won't return anything > this
          return {                          // This is the iterator object
              // This next() method is what makes this an iterator object.
              // It must return an iterator result object.
                next() {
                    return (next <= last)   // If we haven't returned last value yet
                        ? { value: next++ } // return next value and increment it
                        : { done: true };   // otherwise indicate that we're done.
                },
                // As a convenience, we make the iterator itself iterable.
                [Symbol.iterator]() { return this; }
            };
        }
}

// for(let x of new Range(1,10)) console.log(x);
// let isNumberIterateStr = new Range(0,9);
// console.log(isNumberIterateStr.toString());
// console.log([...new Range(-2, 2)]);


// iterable function act like array method map()
function map(iterable, f) {
  let iterator = iterable[Symbol.iterator]();
  return {
    [Symbol.iterator]() {
      return this;
    },
    next() {
      let v = iterator.next();
      if(v.done) {
        return v;
      } else {
        return {value: f(v.value)};
      }
    }
  }
}

let isMapRangeNumber = [...map(new Range(1,4), x => x*x)];
// console.log(isMapRangeNumber);


// iterable function act like array method filter()
function filter(iterable, predicate) {
  let iterator = iterable[Symbol.iterator]();
  return {
    [Symbol.iterator](){return this;},
    next() {
      for(;;) {
        let v = iterator.next();
        if (v.done || predicate(v.value)) {
          return v;
        }
      }
    }
  }
}

let isFilterNumberRange = [...filter(new Range(1,10), x => x % 2 === 0)];
// console.log(isFilterNumberRange);

// iterable function with regex
function words(s) {
  var r = /\s+|$/g;
  r.lastIndex = s.match(/[^ ]/).index;
  return {
    [Symbol.iterator]() {
      return this;
    },
    next() {
      let start = r.lastIndex;
      if(start < s.length) {
        let match = r.exec(s);
        if(match) {
          return {value: s.substring(start, match.index)};
        }
      }
      return {done: true};
    }
  }
}

let isWords = [...words(" abc def ghi! ")];
console.log(isWords);
