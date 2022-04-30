// grouping several variables together to create a basic data package
const dynamicProperty = 'nickname';
const dynamicPropertyValue = 'The Izz';
const i = 10;

const employee = {
  employeeId: 402,
  firstName: 'Lisa',
  lastName:'Stanceki',
  birthDate: new Date(1995,8,5),
  birthPlace: {country: 'Canada', city: 'Toronto'}, //nesting
  [dynamicProperty]: dynamicPropertyValue,
  ['sequence'+i]:1
};
console.log(employee['sequence'+i]);
// console.log(employee.firstName);

// another way
// Object instance
const employee1 = new Object();
employee1.employeeId = 402;
employee1.firstName = 'List';
employee1.lastName = 'Stanecki';
employee1.birthDate = new Date(1995, 8, 15);

// key-value task
const employee2 = new Object();
employee2['employeeId'] = 402;
employee2['firstName'] = 'Lisa';
employee2['lastName'] = 'Stanecki';
employee2['birthDate'] = new Date(1995,8,15);




// const employee3 = {};
// console.log(employee3[dynamicProperty] = dynamicPropertyValue);
