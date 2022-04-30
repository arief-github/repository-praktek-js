// search an array that meets certain criteria
const nums = [2,4,18,15,183,6,7,1,1];

// find the first number > 10
const bigNums = nums.find(el => el > 10);
// console.log(bigNums);

// instead of finding matching element, you would rather know its position
const bigNumIndex = nums.findIndex(el => el > 100);
// console.log(bigNumIndex);


const dates = [new Date(2021,10,20), new Date(2020, 3,12), new Date(2020,5,23), new Date(2022,3,10)];
const matchingDate = dates.find(date => date.getFullYear() === 2020);
console.log(matchingDate);
