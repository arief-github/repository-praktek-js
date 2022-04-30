// Defining regexp
// literal
// matches any string that ends with the letter "s"
let pattern = /s$/;

// RegExp constructor
let patternC = new RegExp("s$");

// String Methods for Pattern Matching
// search() takes a regexp args and returns either the character
let words = "Javascript";
words = "Python";
let result = words.search(/script/ui);
// console.log(result);

// replace() method performs a search-and-replace operation.
// it takes a regex as first args, and replacement str as second args

let quote = /"([^"]*)"/g;
let quotedText = /"(?<quotedText>[^"]*)"/g;
let replace = 'He said "stop"'.replace(quotedText, '<<$1>>');
// console.log(replace);

// replacement function to convert decimal to integers
let str = "15 times 15 is 225";
let replacenum = str.replace(/\d+/gu, n => parseInt(n).toString(16));
// console.log(replacenum);


// match returns an array that contains the results of the match
// or null if no match is found

let strmatch = "7 plus 8 equals 15";
let resultmatch = strmatch.match(/\W+/g);
// console.log(resultmatch);

let vowel = /[aeiou]/y;
// vowel.lastIndex = 1;
// let testvowel = "test".match(vowel)[0];

// console.log(testvowel);


// matchAll()
// returns an iterator for the matches, and leaves the RegExp objects Properties untouched
const regex = /\d/g;
for(const iterate of "Testing 1 2 3".matchAll(regex) ){
  // console.log(`"${iterate[0]}" at ${iterate.index}, iterate.lastIndex: ${iterate.lastIndex}`);
}

// split()
// this method breaks the string on which it is called into an array
let decimalNum = "123,456,789"
let splitNum = decimalNum.split(",");
// console.log(splitNum);
let orderNum = "1,2,3,\n4,5";
let splitAgainNum = orderNum.split(/\s*,\s  */);
// console.log(splitAgainNum);
let htmlTag = /<([^>]+)>/;
let test = "Testing<br/>1,2,3".split(htmlTag);
// console.log(test);


//  ========= LATIHAN REGEXP
// test()
// creating regexp
let regexp1 = new RegExp("xyz");
let regexp2 = /abc/;
let eighteenPlus = /eighteen\+/;
// return true if match , false if not match
// console.log(regexp1.test("abcdefg"));

// testing for matches
let matchTest = /aku/;
// console.log(matchTest.test("akun"));

// sets of character
let digitNumber = /[0123456789]/;
let shortNumber = /[0-9]/
// console.log(shortNumber.test("birth in 1992"));

// creating manual repeating pattern
let dateTime = /\d\d-\w\w\w-\d\d\d\d \d\d:\d\d/;
// console.log(dateTime.test("01-jan-2022 20:43"));

// negation (caret) : return false
let notBinary = /[^01]/;
// console.log(notBinary.test("11011011000"));

// creating auto repeating pattern
let dateTime2 = /\d+-\w+-\d+ \d*:\d*/;
// console.log(dateTime2.test("01-jan-2021 20:46"));

// optional character ?
let neighbor = /neighbou?r/;
// console.log(neighbor.test("neighbour"));

// group character literal
let groupDate = /\d{1,2}-\d{1,2}-\d{4} \d{1,2}:\d{1,2}/;
// console.log(groupDate.test("12-01-2003 20:51"));

// subexpressions repeating
let cartoonCrying = /boo+(hoo+)/i;
// console.log(cartoonCrying.test("booooHoooo"));

// exec()
let isNoun = /bad(ly)?/;
let isNumber = /(\d)+/;
// console.log(isNumber.exec("123"));

// perbedaan global dan sticky
let globalTag = /abc/g;
let stickyTag = /abc/y;
console.log(stickyTag.exec("xyz abc"));
