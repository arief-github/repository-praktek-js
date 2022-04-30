// Array iterator methods
// 1. foreach : iterates throigh an array

let data = [1, 2, 3, 4, 5],
  sum = 0;

// sum dengan menggunakan foreach
data.forEach((array) => sum += array);
// console.log(sum);


// increment Array
data.forEach((val, iter, arr) => arr[iter] = val + 1);
// console.log(data);


// 2. map : iterates each value in array
let a = [1, 2, 3];
let mapArray = a.map(val => val * val);
// console.log(mapArray);

// 3. filter : iterates and returning array containing subset of spesific condition
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let lessThanThree = arr.filter(x => x < 3);
let modulus = arr.filter(x => x % 2 === 0);
// console.log([lessThanThree, modulus]);


// 4. find and findIndex
let oddNumber = [1, 3, 5, 7, 9, 11];
let findIdx = oddNumber.findIndex(x => x === 3); // value 3 appears on index 1
let find = oddNumber.find(x => x % 2 === 1);
// console.log([findIdx, find]);

// Predicate search
const people = [{
    name: "Matt",
    age: 27
  },
  {
    name: "Nicholas",
    age: 29
  }
];

// return match condition, if no match returning undefined
let peopleFind = people.find((element, index, array) => element.age < 28);
// return matching index, if no match returning -1
let peopleFindIndex = people.findIndex((element, index, array) => element.age < 28);
// console.log([peopleFind, peopleFindIndex]);

// every and some
let everyArr = [1,2,3,4,5,10];
// every is like quantifier math A, for all.
// console.log(everyArr.every(x => x < 10));
// console.log(everyArr.every(x => x % 2 === 0));
// some is like quantifier math E, if there exist at least one
// console.log(everyArr.some(x => x % 2 === 0));

// reduce and reduceRight
// methods combine the elements of an array, using the function you specify
let reduceArr = [1,2,3,4,5];
let result = reduceArr.reduce((x,y) => x+y, 1);
// console.log(result);


// stack with push and pop
let stack = [];
stack.push(1,2);
stack.pop();
stack.push(3);
stack.pop();
stack.push([4,5]);
stack.pop();
stack.pop();
stack.push(...people);
// console.log(stack);

// queue with shift and unshift
let queue = [];
queue.unshift(1);
queue.unshift(2);
queue.unshift(3);
queue.unshift(4);
queue.unshift(5);
queue.shift();
queue.shift();

// console.log(queue);

// Subarrays with slice(), splice(), fill() and copyWithin()
// slice()
let sliceArr = [1,2,3,4,5,6];
let results = sliceArr.slice(3);
// console.log(sliceArr[0]);


// inserting and removing elements using splice() both at the same time
let spliceArr = [1,2,3,4,5,6,7,8];
// let res = spliceArr.splice(1,2);
// console.log([spliceArr, res]);

// []; a is now [1,2,"a","b",3,4,5]
// spliceArr.splice(2,0,"a","b");
spliceArr.splice(4,1,"c","d");
// console.log(spliceArr);


// searching and sorting methods
let arrToSearch = [0,1,2,1,0];
// indexOf searching elements from beginning to end
let res = arrToSearch.indexOf(1);
// lastIndexOf searches from end to beginning
let resLast = arrToSearch.lastIndexOf(1);
// console.log([res,resLast]);


// includes() tests equality using the same === operator
let matchArr = [1,true,3,NaN];
// console.log(matchArr.includes(2));


// sort()
// sort the elements of an array in place and retuens the sorted arrays
let sortArr = ["banana","cherry","apple"];
let sortNumber = [33,4,1111,222];
// console.log(sortNumber.sort((a,b) => b-a));

// reverse()
let reverseArr = [1,2,3];
// console.log(reverseArr.reverse());

// Array to String Conversion
let convertStr = new Array(10);
console.log(convertStr.join("-"));
