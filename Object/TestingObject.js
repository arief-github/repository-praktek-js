// in operator property:object
let o = {x:1};
// true
// console.log("x" in o);
// false
// console.log("y" in o);
// true, inherit from toString Object
// console.log("toString" in o);

// hasOwnProperty , it return false for inherited properties
// true
let c1 = o.hasOwnProperty("x");
// false
let c2 = o.hasOwnProperty("y");
// false, because inherited
let c3 = o.hasOwnProperty("toString");
console.log([c1,c2,c3]);

// propertyIsEnumerable : It returns true
//only if the named property is an own property and its enumerable attribute is true.

// let p = {x:"name"};
// let t1 = o.propertyIsEnumerable("x");
// console.log(t1);


// let r = {x:1};
// console.log(r.y !== undefined);


// in can distinguish between properties that do not exist and properties that exist but have been set to undefined
let s = {x:undefined};
console.log("y" in o);
