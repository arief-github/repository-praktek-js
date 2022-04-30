let text = "test";

// instead of use this
// console.log(text.charAt(1));

// use this
console.log(text[3]);

let stringBehaveLikeArray = Array.prototype.join.call("Javascript", " ");
console.log(stringBehaveLikeArray);
