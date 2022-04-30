// create an exact copy of a custom object
const fox = {
  name: 'red fox',
  class: 'Mammalia',
  order: 'Carnivorra',
  family: 'canidae',
  genus: 'vulpes',
  species: 'Vulpes vulpes'
}

// const animalcopy = {...fox};
// console.log(animalcopy);

// const animalcopy =fox;
// console.log(animalcopy);

// const animalcopy = Object.assign({}, fox);
// console.log(animalcopy);

const student = {
  firstName: 'Tazie',
  lastName: 'Yang',
  testScores: [78,88,94,92,88,96]
}

const studentCopy = {...student};

studentCopy.firstName = "dori";
studentCopy.testScores[0] = 56;

console.log([student, studentCopy]);
