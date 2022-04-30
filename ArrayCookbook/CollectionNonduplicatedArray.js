const animals = new Set(['elephant','tiger','lion','zebra','cat','dog']);
// adding item
animals.add('rabbit');
animals.add('goose');
animals.add('tiger'); // nothing happens, cuz this item has already in the set
animals.add('elephant');


// iterate over
for(const animal of animals){
  // console.log(animal);
}


const animalArray = Array.from(animals);
// console.log(animalArray);

// checking item in Set()
// console.log(animals.has('elephant'));


// delete item
// console.log(animals.delete('elephant'));

// delete all items at once
// console.log(animals.clear());
// console.log(animals);
