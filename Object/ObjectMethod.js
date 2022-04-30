// the toString() Method takes no arguments
let point = {
  x:1,
  y:2,
  toString: function() {return `(${this.x}, ${this.y})`;}
}
let logIt = String(point);
let jsonIt = JSON.stringify([point]);
console.log(jsonIt);

// basic
let intToString = (12345).toString();
let booleanToString = (false).toString();
let objectToString = ({name:"arief"}).toString();
// console.log(objectToString);


// the toLocaleString()
let point2 = {
  x:1000,
  y: 2000,
  toString: function() {return `(${this.x}, ${this.y})`},
  toLocaleString: function() {return `(${this.x.toLocaleString()}, ${this.y.toLocaleString()})`}
}

// console.log(point2.toLocaleString());


// addition
// let d = new Date();
// let s = d.toLocaleString();
// console.log(s);


// the valueOf()
let point3 = {
  x:3,
  y:4,
  valueOf: function(){return Math.hypot(this.x, this.y)}
}
// console.log(Number(point3));


// the toJSON()
let point4 = {
  x:1,

  y:2,
  toString: function() {return `(${this.x}, ${this.y})`},
  toJSON: function() {return this.toString()}
}

console.log(JSON.stringify([point4]));
