// function generator
// function* getRandomIntegers(max){
//   while(true){
//     yield Math.floor(Math.random() * Math.floor(max) + 1)
//   }
// }
// const randomGenerator = getRandomIntegers(6);
// for(let i=0; i < 10; i++){
//   console.log(randomGenerator.next());
// }

// async keyword with function generator
async function* getRandomIntegers(max) {
  while (true) {
    yield Math.floor(Math.random() * Math.floor(max) + 1);
  }
}
//
// const randomGenerator = getRandomIntegers(6);
// for (let i = 0; i < 10; i++) {
//   const promise = randomGenerator.next();
//   console.log('Received promise');
//   promise.then(result => console.log(`Received result: ${result.value}`));
// }


// uses for await loop to perform consecutive awaits
async function searchRandomNumbers(searchNumber, generator) {
  for await (const value of generator) {
    console.log(value);
    if (value === searchNumber) return;
  }
}

const randomGenerator = getRandomIntegers(100);
searchRandomNumbers(42, randomGenerator).then(result => {
  console.log('Number found');
}).catch(error => console.log('Number not found!'))
