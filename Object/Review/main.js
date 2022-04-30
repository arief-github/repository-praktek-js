// 6.2. Creating Object
// 6.2.1. Object Literals
let empty = {};
let point = {x:1, y:0};
let p2 = {x:point.x, y: point.y+1};
// let book = {
//   "main-title":"javascript",
//   "sub-title": "The Definitive Guide",
//   for: "all audience",
//   author: {
//     firstName: "David",
//     surname: "Flanagan"
//   }
// };
// access with array
// console.log(book["main-title"]);
// console.log(p2.x);



// 6.2.2. Creating Objects with new
let o = new Object();
o.name = "Arief";
// console.log(o);


// 6.2.3. The Prototype
const yoshi = {skulk: true};
const hattori = {sneak:true};
Object.setPrototypeOf(yoshi, hattori);

// console.log("sneak" in yoshi);

// 6.2.4. Object.create()
// o1 inherits props x and y
let o1 = Object.create({x:1, y:2});
// o3 is like {} or new Object()
let o3 = Object.create(Object.prototype);
// Object.create() has an optional argument

let animal = {
  eats: true
}
let o4 = Object.create(animal,{
  jumps:{
    value:true
  }
})


let person = {};
let habit = Object.create(person,{
  list:{
    // must property flags/descriptor
    value: "Read Book",
  }
})
//
// console.log(habit.list);



// 6.3. Querying and setting
let book = {
  "main-title":"javascript",
  "sub-title": "The Definitive Guide",
  for: "all audience",
  author: {
    firstName: "David",
    surname: "Flanagan"
  }
};

// Querying
let withDot = book.author;
// console.log(withDot);
let withArray = book["sub-title"];
// console.log(withArray);

// setting/add
book.edition = 7;
book["js-edition"] = "Es6";
// console.log(book);


// 6.3.1. Object as associative arrays
// first approach
Object.size = function(arr){
  let size = 0;
  for(let key in arr) {
     if(arr.hasOwnProperty(key)) size++;
  }
  return size;
}

console.log(Object.size(book));
// second approach
console.log(Object.keys(book).length);

// for(let key in book){
//   let value = book[key];
//   console.log(key + " = " + value + ' ');
// }

// Inheritance
let obj = {};
obj.x = 1;
let p = Object.create(obj);
// console.log(p.x);
p.y = 2;
let q = Object.create(p);
// console.log(q.y);


// deleting props
delete book["main-title"];
delete book["js-edition"];
delete book.for;
// console.log(book);


// testing props
let cartesian = {x:1};
// console.log("x" in cartesian);
// console.log("y" in cartesian);
// console.log("prototype" in cartesian);

// console.log(cartesian.hasOwnProperty("x"));
// console.log(cartesian.hasOwnProperty("y"));
// ignore the Inheritance
// console.log(cartesian.hasOwnProperty("toString"));


// Enumerable Properties
let oEnum = {
  x:1,
  y:2,
  z:3,
  alpha(){

  }
}

let pEnum = Object.create(oEnum);
console.log(oEnum.propertyIsEnumerable("toString"));
for(let p in oEnum){
  // console.log(p);
  // skip inherited properties
  // if(!o.hasOwnProperty(p)) continue;
  // skip all methods
  if(typeof oEnum[p] === "function") continue;
  // console.log(p);
}


// Extending Objects L copy the props of one object to another object
let target = {x:1};
let source = {y:2, z:3};

// for(let key of Object.keys(source)){
//   target[key] = source[key];
//   console.log(target);
// }

// Object.assign()
function merge(target, ...sources){
  for(let source of sources){
    for(let key of Object.keys(source)){
      if(!(key in target)){
        target[key] = source[key];
      }
    }
  }
  return target;
}
// override existing properties
// console.log(Object.assign({x:1},{x:2,y:2},{y:3,z:4}));

// doesnt override existing properties
let result = merge({x:1},{x:2,y:2},{y:3,z:4});
// console.log(merge({x: 1}, {x: 2, y: 2}, {y: 3, z: 4}));


// Serializing Objects
let seo = {x:1,y:{z:[false,null,""]}};
let stringify = JSON.stringify(seo);
// turn object to json
// console.log(stringify);
let parseBack = JSON.parse(stringify);
// turn back into normal object
// console.log(parseBack);


// Objects Methods
// toString
let points = {
  x:1,
  y:2,
  toString: function(){return `(${this.x}, ${this.y})`;}
}
// console.log(String(points));


// toLocaleString
let localizationPoint = {
  x:1000,
  y:2000,
  toString: function(){return `(${this.x}, ${this.y})`;},
  toLocaleString: function(){
    return `(${this.x.toLocaleString()}, ${this.y.toLocaleString()})`;
  }
}
// compare
// console.log([localizationPoint.toString(), localizationPoint.toLocaleString()]);


// valueOf()
let valuePoint = {
  x:3,
  y:4,
  valueOf: function(){
    return Math.hypot(this.x, this.y)
  }
}
Number(valuePoint);
// console.log(valuePoint > 5);

// toJSON()

let jsonPoint = {
  x:1,
  y:2,
  toJSON: function(){return this.toString();}
}
// console.log(JSON.stringify([point]));

// Shorthand Properties
// instead Of
// let x = 1, y = 2;
// let o = {
//   x:x,
//   y:y
// }

// you can do this way
// let x = 1, y = 2;
// let o = {x,y};
// console.log(o.x + o.y);

// Computed Property Names
const PROPERTY_NAME = "p1";
function computerPropertyName() {return "p"+2;}

// let oComputed = {};
// oComputed[PROPERTY_NAME] = 1;
// oComputed[computerPropertyName()] = 2;
// console.log(oComputed);


// with es6 styles
let pComputed = {
  [PROPERTY_NAME]: 1,
  [computerPropertyName()]:2
}

// console.log(pComputed);


// computed/copy object with spread operator
let position = {x:0, y:0};
let dimensions = {width:100, height: 75};
let rect = {...position, ...dimensions};
// console.log(rect.y + rect.width + rect.height);

// spread operator can be used for interpolation
let object1 = {x:1,y:2,z:3};
let pre = {x:0,...object1};

let inherits = Object.create(pre);
console.log(inherits.object1);

// console.log(pre);

// !shorthand Methods
// let square = {
//   area: function(){
//     return this.side * this.side
//   },
//   side: 10
// }
// console.log(square.area());

// let square = {
//   area(){
//     return this.side * this.side
//   },
//   side:10
// }
// console.log(square.area());

const METHOD_NAME = "m";
const symbol = Symbol();
let weirdMethods = {
  "method With Spaces"(x) {return x + 1;},
  [METHOD_NAME](x){return x + 2;},
  [symbol](x){return x+3;}
};

// console.log(weirdMethods["method With Spaces"](1));
// console.log(weirdMethods[METHOD_NAME](1));
// console.log(weirdMethods[symbol](1));


// accessor getter and setter
let accessor = {
  x:1.0,
  y:1.0,
  get r() {return Math.hypot(this.x, this.y)},
  set r(newValue){
    let oldValue = Math.hypot(this.x, this.y);
    let ratio = newValue/oldValue;
    this.x *= ratio;
    this.y *= ratio;
  },
  get theta(){
    return Math.atan2(this.y, this.x);
  }
}

accessor.r = 2;
console.log(accessor.r);
