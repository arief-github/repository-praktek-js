// processing array with functions
// non-functional style like this
let data = [1,1,3,5,5];
let total = 0;
for(let i = 0; i < data.length; i++) total += data[i];
let mean = total/data.length;
// console.log(mean);  => 3
total = 0;
for(let i = 0; i < data.length; i++){
  let deviation = data[i] - mean;
  total += deviation * deviation;
}
let sttdev = Math.sqrt(total/(data.length-1));
// console.log(sttdev); => 2

// functional style
const sum = (x,y) => x+y;
const square = x => x*x;
let dataFunc = [1,1,3,5,5];
let meanFunc = dataFunc.reduce(sum)/data.length;
// console.log(meanFunc); => 3
let deviations = dataFunc.map(x => x-mean);
// console.log(deviations);
let sttdevFunc = Math.sqrt(deviations.map(square).reduce(sum)/(data.length-1));



// Third Approach
const map = function(a, ...args){return a.map(...args);};
const reduce = function(a, ...args){return a.reduce(...args);};
const sum2 = (x,y) => x+y;
const square2 = x => x*x;


let dataFunc2 = [1,1,3,5,5];
let meanFunc2 = reduce(dataFunc2, sum2)/dataFunc2.length;
// console.log(meanFunc2);
let deviations2 = map(dataFunc2, x => x-meanFunc2);
let sttdev2 = Math.sqrt(reduce(map(deviations2, square), sum)/(data.length-1));
