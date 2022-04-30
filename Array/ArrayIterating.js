// using for...of for iterating an array
let letters = [..."Hello world"];
let string = "";

for(let letter of letters){
  string += letter;
}

// console.log(string);

// letter entries for checking index of every item in array
let other = "";
for(let[index, letter] of letters.entries()){
  if(index % 2 === 1) other += letter;
}
// console.log(other);

// forEach also useful for iterating an array
let uppercase = "";
letters.forEach(letter => {
  uppercase += letter.toUpperCase();
  // if(/[aiueo]/.test(letter)){
  //   uppercase += letter;
  // }
});
console.log(uppercase);


// loop through the elements of an array with a good old-fashioned
// for loop
let vowels = "";
for(let i = 0; i < letters.length; i++){
  let letter = letters[i];
  if(/[aiueo]/.test(letter)){
    vowels += letter;
  }
}
console.log(vowels);
