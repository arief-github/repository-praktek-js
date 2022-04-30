// searching exact matches array
// search method : indexOf(), lastIndexOf(), includes();

const animals = ['dog','cat', 'seal', 'elephant','walrus','lion','cat'];
// console.log(animals.indexOf('elephant'));
// console.log(animals.lastIndexOf('lions'));
// console.log(animals.includes('dog'));

// indexOf read from lowest to highest + optional argue starting index
console.log(animals.indexOf('cat',2));
// lastIndexOf read from highest to lowest + same like above
// console.log(animals.lastIndexOf('cat',2));

const fruits = ['banana','apple','watermelon','strawberry','blueberry','lemon','orangefruit','coconut'];

console.log(fruits.indexOf('strawberry',0));
console.log(fruits.lastIndexOf('orangefruit'));
