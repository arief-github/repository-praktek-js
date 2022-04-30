// use flat()
const fruitArray = [];

fruitArray[0] = ["strawberry", "blueberry", "raspberry"];
fruitArray[1] = ["lime","lemon","orange","grapefruit"];
fruitArray[2] = ["tangerline", "apricot","peach", "plum"];

const fruitList = fruitArray.flat();
// console.log(fruitList);


// use concat
const concatFruitList = fruitArray[0].concat(fruitArray[1],fruitArray[2])
// console.log(concatFruitList);


// flat level
const threeDimensionalNumbers = [1,[2,[3,4,5],6],7];
let flat1d = threeDimensionalNumbers.flat(1);
let flat2d = threeDimensionalNumbers.flat(2);
// console.log(flat2d);


// flat all levels
const flatttest = threeDimensionalNumbers.flat(Infinity);

console.log(flatttest);
