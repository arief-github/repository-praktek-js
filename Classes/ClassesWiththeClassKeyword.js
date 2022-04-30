// the Range class rewritten using class
class Range {
    constructor(from, to) {
        // Store the start and end points (state) of this new range object.
        // These are noninherited properties that are unique to this object.
        this.from = from;
        this.to = to;
    }
    // Return true if x is in the range, false otherwise
    // This method works for textual and Date ranges as well as numeric.
    includes(x) { return this.from <= x && x <= this.to; }
    // A generator function that makes instances of the class iterable.
    // Note that it only works for numeric ranges.
    *[Symbol.iterator]() {
        for(let x = Math.ceil(this.from); x <= this.to; x++) yield x;
    }
    // Return a string representation of the range
    toString() { return `(${this.from}...${this.to})`; }

    // static keyword
    static parse(s) {
      let matches = s.match(/^\((\d+)\.\.\.(\d+)\)$/);
      if (!matches) {
          throw new TypeError(`Cannot parse Range from "${s}".`)
      }
      return new Range(parseInt(matches[1]), parseInt(matches[2]));
  }
}

// let r = new Range(1,3);
// console.log(r.includes(2));
// console.log(r.toString());
// console.log([...r]);


// perform inherits from another class
class Span extends Range{
  constructor(start, length){
    if(length >= 0){
      super(start, start + length)
    }
    else{
      super(start + length, start)
    }
  }
}

// class expression
// let Square = class {constructor(x){this.area = x * x}};
// console.log(new Square(3).area);

// invoke static code
let r = Range.parse('(1...10)');
console.log(r);
