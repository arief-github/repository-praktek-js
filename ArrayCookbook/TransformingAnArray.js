// use map() for transforming array
const decArray = [23,255,122,5,16,99];
const hexArray = decArray.map(el => el.toString(16));
const octalArray = decArray.map(el => el.toString(8));
const binaryArray = decArray.map(el => el.toString(2));
console.log(binaryArray);
