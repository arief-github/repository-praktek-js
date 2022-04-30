// simple Javascript Class
function Range(from, to){
  let r = Object.create(Range.methods);
  r.from = from;
  r.to = to;
  return r;
}

Range.methods = {
  includes(x) {return this.from <= x && x <= this.to;},
  *[Symbol.iterator](){
    for(let x = Math.ceil(this.from); x <= this.to;x++ ) yield x;
  },
  toString(){return "(" + this.from + "..." + this.to + ")";}
}

let r = new Range(1,3);
// console.log(r.includes(1));
// console.log(r.toString());
// console.log([...r]);
// test here
// console.log(Range.methods.isPrototypeOf(r));
// console.log(r instanceof Range);

// class in ES5
Range.prototype.includes = function(x) {
  return this.from <= x && x <= this.to;
}

Range.prototype.toString = function(){
  return "(" + this.from + "..." + this.to + ")";
}
