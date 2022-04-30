const animals = ['dog','cat','seal','walrus','lion','cat'];
// find where the walrus item is
const walrusIndex = animals.indexOf('walrus');
// console.log(walrusIndex);
// const animalsSliced = [...animals.slice(0, walrusIndex), ...animals.slice(walrusIndex+1)];
// slice(start, end)
const animalsSliced = animals.slice(0, walrusIndex);
// console.log(animalsSliced);

const numSliced = [1,2,3,4,5,6].slice(1,4);
// console.log(numSliced);

// console.log(animals.splice(2));
console.log([animals, animals.splice(2,1, 'zebra')]);
