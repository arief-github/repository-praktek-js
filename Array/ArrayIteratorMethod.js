// foreach
// let data = [1,2,3,4,5], sum = 0;

// data.forEach(value => {value += sum;});
// console.log(data);

// data.forEach(function(value, index, array) {
//   array[index] = value + 1;
// })
// console.log(data);


// map, filter, reduce
let a = [1,2,3,4,5,6];
let maps = a.map(x => x*x);
let filters = a.filter(x => x % 2 === 0);


let reducer = a.reduce((value, accumulator) => {
  return value + accumulator
})
// console.log(reducer);


// find and findIndex
let arr = ["3","5",10];
// return index
let fi = arr.findIndex(x => x === 6);
let fi2 = arr.findIndex(x => x < 0);

// return value
let fi3 = arr.find(x => x === 1);
let fi4 = arr.find(x => x % 2 === 1);
// console.log(fi4);



// every() and some()
let arrEvery = arr.every(x => typeof x === 'string');
let arrSome = arr.some(x => typeof x === 'number');
// console.log([arrEvery, arrSome]);

// reduce() and reduceRight()
// reduce is ltr, reduceRight is rtl
let arrReduce = [1,2,3,4,5];
let result = arrReduce.reduce((x,y) => (x > y) ? x : y);
let result2 = arrReduce.reduceRight((x,y) => x*y);
// console.log(result2);


// flat()
// console.log([1,[2,[3]]].flat());

let arrayFlat1 = [1,[2,3]];
let arrayFlat2 = [1,[2,[3,[4]]]];
// change the number and see the effect
// console.log(arrayFlat2.flat(3));
// flatMap()
let phrases = ["hello world", "the definitive guide"];
let words = phrases.flatMap(phrase => phrase.split(" "));
// console.log(words);


// concat
// let arrConcat = [1,2,3];
// console.log(arrConcat.concat([4,5],[6,7]));

// let concat1 = [1,2,3];
// let concat2 = [4,5,6];
// console.log(concat1.concat(concat2));




// stack and queues with push(), pop(), shifT(), unshift()
// stack with push and pop
let stack = [];
stack.push(1,2);
stack.push(3,4);
stack.push(5,6);
stack.pop();
stack.pop();
stack.pop();
// console.log(stack);



// queue with unshift and shifT
let queue = [];
queue.unshift(1,2);
queue.unshift(3,4);
queue.unshift(5,6);
queue.shift();
queue.shift();
queue.shift();
// console.log(queue);


// sub arrays with slice(), splice(), fill() and copyWithin()
let arrSlice = [1,2,3,4,5,6,7,8];
// slice(start, end) doesnt modification array
let results = arrSlice.slice(-1);
// console.log([arrSlice,results]);
// splice() do modification array
let resultsSplice = arrSlice.splice(1,0,"str");
// console.log(arrSlice);
// fill() do modify array
let fillArray =new Array(5);

// console.log(fillArray.fill(0));
// console.log(fillArray.fill(2,1)); //element, start
// console.log(fillArray.fill(8,1,-2));   //element, start, end



// copyWithin : (destinasi awal, element pada index berapa yang akan dicopy, destinasi akhir)
let arrCopy = [1,2,3,4,5];
// console.log(arrCopy.copyWithin(1));
// console.log(arrCopy.copyWithin(2,3,5));
// console.log(arrCopy.copyWithin(0,-2));

// array search and sort : return index array (true) otherwise -1
let aSearch = [0,1,2,1,0];
// console.log(aSearch.indexOf(5));
// console.log(aSearch.lastIndexOf(2));

// include search : return true if element has found.
let aInclude = [1,true, 3, NaN];
// console.log(aInclude.includes(true));
// console.log(aInclude.includes(2));


// sort
let sortFruit = ["banana", "cherry", "apple"];
// return alphabetical order if no arguments
// console.log(sortFruit.sort());

let sortNumbers = [33,4, 1111, 222];
// alphabetical order
// console.log(sortNumbers.sort());

// numerical order
let expression = sortNumbers.sort(function(a,b){
  return a-b;
});
// console.log(expression);

// reverse numerical order
let expReverse = sortNumbers.sort((a,b) => b-a);
// console.log(expReverse);


let sortAnimals = ["ant", "Bug", "cat", "Dog"];
// case-sensitive sort (normal behaviour)
// console.log(sortAnimals.sort());

// case-insensitive sort
let expressionCase = sortAnimals.sort(function(s,t){
  let [a,b] = [s.toLowerCase(), t.toLowerCase()];
  if(a < b) return -1;
  if(a > b) return 1;
  return 0;
});

// console.log(expressionCase);

// reverse array
let arrReverse = [1,2,3];
console.log(arrReverse.reverse());
