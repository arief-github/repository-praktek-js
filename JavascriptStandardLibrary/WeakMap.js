// BASIC API
// empty weakmap is instantiated with the new keyword
const wm = new WeakMap();

/*
Keys in a WeakMap can only be of type or inherit from Object—all other attempts to set a key with a
non-object will throw a TypeError. There are no restrictions on the type of the value.
*/

const key1 = {id:1},key2 = {id:2}, key3 = {id:3};
const stringkey = new String("key1");
// const wm1 = new WeakMap([[key1, "val1"],['BADKEY', "val2"],[key3, "val3"]]);
// console.log(wm1.get(key1));
// TypeError
// console.log(wm1.get('BADKEY'));

// Primitives can still be used with an object wrapper
// console.log(wm1.get(stringkey));


// WeakMap queried with get() and has() and removed with delete()
const wm2 = new WeakMap();
const key4 = {id:1},key5 = {id:2};

console.log(wm2.has(key4));
console.log(wm2.get(key4));

wm2.set(key4, "Arief");
console.log(wm2.get(key4));
