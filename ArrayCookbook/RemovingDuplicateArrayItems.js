// use Set()
// let numbersWithDuplicates = [2,42,2,42,5,304,1,13,14,2,13];
// const uniqueNumbersSet = new Set(numbersWithDuplicates);
// const uniqueNumbersArray = Array.from(uniqueNumbersSet);
// console.log(uniqueNumbersArray);
let numbersWithDuplicates = [2,42,2,42,5,304,1,13,14,2,13];
const uniqueNumbers = [...new Set(numbersWithDuplicates)];
console.log(uniqueNumbers);
