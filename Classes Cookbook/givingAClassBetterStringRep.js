// const log = console.log.bind(document);
class Person{
  constructor(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
  }
  toString(){
    return `${this.lastName}, ${this.firstName}`;
  }
}

const newPerson = new Person('0411','Kurniawan');
const message = 'The name is' + newPerson;
console.log(newPerson.toString());
