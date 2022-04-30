// create Sets object with the Set() constructor
let str = 'Mississippi';
let s = new Set(str);
// set not allowed duplicate values
let t = new Set([1,1,2,3,4,5,5,5,6,7]);

// size is like length of an array
// console.log(s.size);

// Set has these three methods : add(), delete(), clear()
let emptySet = new Set();

//  ADD SECTION
console.log(emptySet.size);
emptySet.add(1);
console.log(emptySet.size);
// there's no effect when you add same value as before
emptySet.add(1);
console.log(emptySet.size);
emptySet.add(true);
console.log(emptySet.size);
emptySet.add([1,2,3]);
console.log(emptySet.size);


// DELETE SECTION
emptySet.delete(1);
console.log(emptySet.size);
emptySet.delete("false");
console.log(emptySet.size);
emptySet.delete(true);
emptySet.delete([1,2,3]);
console.log(emptySet.size);

// CLEAR SECTION
emptySet.clear();
console.log(emptySet.size);


/*
The most important thing we do with sets is not to add and remove ele‐
ments from them, but to check to see whether a specified value is a member of the
set.
*/

let oneDigitPrimes = new Set([2,3,5,7]);
// console.log(oneDigitPrimes.has("7"));

// Set class is iterable, which means you can use a for/of loop
let sum = 0;
for(let p of oneDigitPrimes){
  sum += p;
}

console.log(sum);

/*
Because Set objects are iterable, you can convert them to arrays and argument lists
with the ... spread operator
*/

let convertToArray = [...oneDigitPrimes];
// console.log(Math.max(...oneDigitPrimes));


/*
the Set class also implements a forEach() method that
is similar to the array method of the same name
*/
let product = 1;
oneDigitPrimes.forEach(n => {product *= n;});
console.log(product);
