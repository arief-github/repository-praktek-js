// RegExp constructor takes one or two string as arguments
// and creates a new RegExp object
/*
the first arguments is a string that contains the body of
regular expression,
the second arguments to RegExp() is flags
*/
let exactMatch = /Javascript/;
let caseInsensitive = new RegExp(exactMatch, "i");
// console.log(caseInsensitive);


// exec
// takes single argument
// if no match is found > return null
// if match is found > returns an array jsut like the array

let pattern = /Java/g;
let text = "Javascript > Java";
let match;
while((match = pattern.exec(text) !== null)){
  // console.log(`Matched ${match[0]} at ${match.index}`);
  // console.log(`Next search begins at ${pattern.lastIndex}`);
}


// ======== LATIHAN REGEXP

// test()
