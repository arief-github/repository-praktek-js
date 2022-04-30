// BASIC API
// create WeakSet with instance
const ws = new WeakSet();

const val1 = {id:1}, val2 = {id:2}, val3 = {id:3};
const ws1 = new WeakSet([val1, val2, val3]);

console.log(ws1.has(val1));
