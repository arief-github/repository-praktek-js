// adding and deleting array
// push() to add array item
let a = [];
a.push("zero");
a.push("one", "two");

// same as
a[3] = "three";


// inserting method
// push() add item from end ; pop() delete item from end;
a.push("four");
a.pop()
// console.log(a);

// unshift() add item from start, shift() deleting item from start
a.unshift("minus");
a.shift()
// console.log(a);

// you can delete the array of items, with delete keyword
delete a[3];
// console.log(a);

// splice() perform actions inserting, deleting and replacing
// (array index, how much delete(opsional), what or how much item will be inserted)
a.splice(1,0, "splice");
console.log(a);
