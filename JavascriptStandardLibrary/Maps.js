// Create a new map with the Map() constructor
let m = new Map();
// a new map initialized with string keys mapped to numbers
let n = new Map([
  ["one",1],
  ["two",2]
]);


// you can also use the Map() constructor to copy other maps/copy the property names
// and values from an existing object
let copy = new Map(n);
let o = {x:1, y:2};
// Same as new map([["x", 1], ["y", 2]])
let p = new Map(Object.entries(o))
// console.log(p);


// Maps has these elements : get() set() has() delete() clear()
let emptyMap = new Map();
console.log(emptyMap.size);
emptyMap.set("one", 1);
emptyMap.set("two", 2);
console.log(emptyMap.size);


console.log(emptyMap.get("three"));
emptyMap.set("one", true);
console.log(emptyMap.size);

console.log(emptyMap.has("one"));
console.log(emptyMap.has(true));

emptyMap.delete("one");
console.log(emptyMap.size);
emptyMap.delete("three");
emptyMap.clear();

// set() method of Map can be chained
let emptyMap2 = new Map().set("one",1).set("two", 2).set("three",3);
// console.log(emptyMap2.size);
// console.log(emptyMap2.get("two"));

let emptyMap3 = new Map().set({},1).set({},2);
// console.log(emptyMap3.size);
// console.log(emptyMap3.get({}));
emptyMap3.set(m, undefined);
// console.log(emptyMap3.has(m));
// console.log(emptyMap3.get(m));

// Map objects are iterable, and each iterated value is a two element array
// where the first element is a key and the second is the value associated with
// that key

let mapObj = new Map([["x",1],["y",2]]);
// using spread operator
// console.log(...mapObj);
// using for of
// for(let [key, value] of mapObj){
//   console.log([key, value]);
// }

// method for iterating : keys(), values(), entries()
// console.log([...mapObj.keys()]);
// console.log([...mapObj.values()]);
// console.log([...mapObj.entries()]);
