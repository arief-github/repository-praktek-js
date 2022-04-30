const people = [
 { firstName: 'Joe', lastName: 'Khan', age: 21 },
 { firstName: 'Dorian', lastName: 'Khan', age: 15 },
 { firstName: 'Tammy', lastName: 'Smith', age: 41 },
 { firstName: 'Noor', lastName: 'Biles', age: 33 },
 { firstName: 'Sumatva', lastName: 'Chen', age: 19 }
];

// sort people from youngest to oldest
people.sort(function(a,b){
  if(a.age < b.age){
    return -1;
  }else if(a.age > b.age){
    return 1;
  }else{
    return 0;
  }
})

// console.log(people);

// short way
people.sort(function(a,b){
  return a.age - b.age;
});

// shorter way
people.sort((a,b) => a.age - b.age);
console.log(people);
