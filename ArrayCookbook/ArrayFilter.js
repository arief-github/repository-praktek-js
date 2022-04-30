// filter animals name start with e
function startsWithE(animal){
  return animal[0].toLowerCase() === 'e';
}

function startsWithUpperCase(animal){
  return animal[0].toUpperCase();
}

const animals = ['elephant','tiger','lion','zebra','cat','dog','rabbit',"Cat", 'goose', 'earwig','emu'];
const animalsE = animals.filter(start);

console.log(animalsE);
