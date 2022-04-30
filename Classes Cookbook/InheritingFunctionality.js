// this is a parent class
class Shape{
  getArea(){
    return null;
  }
}

// this is a child class
class Triangle extends Shape{
  constructor(base, height){
    super();
    this.base = base;
    this.height = height;
  }
  getArea(){
    return this.base * this.height/2;
  }
}
// more child classes, derived to superclass
class Circle extends Shape{
  constructor(radius){
    super();
    this.radius = radius;
  }
  getArea(){
    return Math.PI * this.radius**2;
  }
}

class Square extends Shape{
  constructor(length){
    super();
    this.length = length;
  }
  getArea(){
    return this.length**2;
  }
}

const shapes = [new Triangle(15,8), new Circle(8), new Square(7)];
// console.log(shapes);
shapes.sort((a,b) => a.getArea() - b.getArea());
// console.log(shapes);


// if parent class constructor accepts arguments , you should pass them
class Book{
  constructor(title, author, publishDate){
    this.title = title;
    this.author = author;
    this.publishDate = publishDate;
  }
}

class EBook extends Book{
  constructor(title, publishDate, format){
    super(title, author, publishDate);
    this.format = format
  }
}

// let book = new Book('Javascript in Action','AK',2021);
// let format = new EBook('Javascript',2021,'pdf');
// console.log(format);

// composition pattern
// class Person{
//   constructor(firstName, lastName){
//     this.firstName = firstName;
//     this.lastName = lastName;
//   }
// }
//
// class Employee{
//   constructor(person, department, hireDate){
//     this.person = person;
//     this.department = department;
//     this.hireDate = hireDate;
//   }
// }

const employee = new Employee(new Person('Arief','Kurniawan'), 'Fullstack Javascript Web Developer', new Date());
// console.log(employee);


// Extra : Prototype Chains
// this will be the parent class
function Person(firstName, lastName){
  this.firstName = firstName;
  this.lastName = lastName;
}
// add the methods to the Person class
Person.prototype.greet = function(){
  console.log('I am '+ this.firstName + ' '+this.lastName);
}

function Employee(firstName, lastName, department){
  // it binds the Person constructor to this objects context
  Person.call(this, firstName, lastName);
  this.department = department;
}

// link the Person prototype to the Employee function
// this establishes the inheritance relationship
Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;

// Add the methods to Employee Class
Employee.prototype.introduceJob = function(){
  console.log('I work in '+ this.department);
}

const newEmployee = new Employee('Luke', 'Takei', 'Tech Support');

console.log(newEmployee.introduceJob());
