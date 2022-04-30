// the join method converts all elements of an array to strings
// and concatenates them

// let a = [1,2,3];
// let join = a.join("");
// let b = new Array(10);
//
// console.log(b.join("-"));

// let names = ["anna", "john", "gru"];
// let insertQuotes = names.join(" ");
// console.log(insertQuotes);


// glued separator
// let arr = ["bilbo", "gandalf", "Nazgul"];
// let str = arr.join(';');
// console.log(str);


// toString()
// let toString = [1,[2,["c",["d"]]]].toLocaleString();
// console.log(toString);


// another example
const elements = ['fire','air','water'];
// console.log(elements.join());
// console.log(elements.join(''));
console.log(elements.join(' - '));



// addition : static array function
console.log(Array.isArray(elements));
