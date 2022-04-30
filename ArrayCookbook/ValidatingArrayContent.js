// ensure array meet the criteria
function containsLettersOnly(el){
  const textExp = /^[a-zA-z]+$/;
  return textExp.test(el);
}

// test an array every()
const collectionOfItems = ['**',123,'aaa','bbb','-',46,'AAA'];
let result = collectionOfItems.every(containsLettersOnly)


const animals = ['cat','elephant','lion','dog'];
let resultString = animals.every(containsLettersOnly);
console.log(resultString);

// test an array some()
let resultsome = collectionOfItems.some(containsLettersOnly)
