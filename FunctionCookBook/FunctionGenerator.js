// each time a generator returns a value, it pauses its execution until the caller
// request the next value
function* generateValues(){
  yield 895498;
  yield 'This is the second value';
  yield 5;
  return 'This is the end';
}
const generator = generateValues();
// untuk mengeluarkan semua nilai pada f.gen
// harus melakukan pemanggilan sebanyak yield yang berada pada f.gen
// console.log(generator.next().value);
// console.log(generator.next().value);
// console.log(generator.next().value);
// console.log(generator.next().value);


// first approach : for..of work for get all values from f.gen
// return tidak akan ditampilkan
// for(const value of generateValues()){
//   console.log(value);
// }

// second approach : spread operator work too, and its return array
// return value will ignored
// const values = [...generateValues()];
// console.log(values);



// extra examples
// Math.imul() merupakan fungsi yang dapat mengalikan 2 parameter nya
// nilai kembalian dari Math.imul adalah 32bit-like-C

// function mulberry32(seed){
//   return function random(){
//     let t = seed += 0x6D2B79F5;
//     t = Math.imul(t ^ t >>> 15, t | 1);
//     t ^= t + Math.imul(t ^ t >>> 7, t | 61);
//     return ((t ^ t >>> 14) >>> 0) / 4294967296;
//   }
// }
//
// const seed = 98345;
// const randomFunction = mulberry32(seed);

// console.log(randomFunction());
// console.log(randomFunction());
// console.log(randomFunction());

function* mulberry32(seed){
  let t = seed += 0x6D2B79F5;
  while(true){
    t = Math.imul(t ^ t >>> 15, t | 1);
    t ^= t + Math.imul(t ^ t >>> 7, t | 61);
    yield ((t ^ t >>> 14) >>> 0) / 4294967296;
  }
}

const seed = 98345;

const generatorf = mulberry32(seed);
console.log(generatorf.next().value);
console.log(generatorf.next().value);
console.log(generatorf.next().value);
