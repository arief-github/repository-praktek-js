// join two arrays
const evens = [2,4,6,8];
const odds = [1,3,5,7,9];

// 1. with concat
// const evensAndOdds = evens.concat(odds);
// console.log(evensAndOdds);

// with spread
// const evensAndOdds = [...evens, ...odds];
// console.log(evensAndOdds);

// with spread + value
// const evensAndOdds = [...evens, 10,12, ...odds, 11];
// console.log(evensAndOdds);

// merging Date
const dates2020 = [new Date(2020,1,10), new Date(2021,2,10)];
const dates2021 = [new Date(2021,1,10), new Date(2021,2,10)];
const datesComnbined = [...dates2020, ...dates2021];

datesComnbined[0].setYear(2022);
console.log(datesComnbined);
