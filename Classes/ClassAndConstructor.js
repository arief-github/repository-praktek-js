// read the old style code and understand what happened under the hood
function range(from, to){
  this.from = from;
  this.to = to;
}

range.prototype = {
  includes: function(x) {return this.from <= x && x <= this.to;},
  [Symbol.iterator]: function*(){
    for(let x = Math.ceil(this.from); x <= this.to; x++) yield x;
  },
  toString: function(){return "(" + this.from + "..." + this.to + ")";}
};

let r =  range(1,3);
// console.log(r.includes(2));
// console.log(r.toString());
// console.log([...r]);

// detail about Constructor
// instance of : we want to know if r is a Range object
// console.log(r instanceof Range);
// function Strange(){}
// Strange.prototype = Range.prototype;
// console.log(new Strange() instanceof Range);

// isPrototypeOf
// console.log(Range.methods.isPrototypeOf(r));
