// slice method make shallow copy
const animals = ['elephant','tiger','lion','zebra','cat','dog','rabbit', 'goose'];

// slice(start, end-1)
const domestic = animals.slice(2,4);

const firstHalf = animals.slice(0,3);
const secondHalf = animals.slice(4,7);
const extraAnimals = [...firstHalf, 'emu', 'platypus', ...secondHalf];
console.log([animals, secondHalf]);
