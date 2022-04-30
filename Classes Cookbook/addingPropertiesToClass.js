// add property getter and setter to wrap your class data
class Person{
  constructor(firstName, lastName, dateOfBirth){
    this.firstName = firstName;
    this.lastName = lastName;
    this.dateOfBirth = dateOfBirth;
  }
  get age(){
    if(this.dateOfBirth instanceof Date){
      const today = new Date();
      let age = today.getFullYear() - this.dateOfBirth.getFullYear();
      const monthDIff = today.getMonth() - this.dateOfBirth.getMonth();
      if(monthDIff < 0 || (monthDIff === 0 && today.getDate() < this.dateOfBirth.getDate())){
        age -= 1;
      }
      return age;
    }
  }
  get dateOfBirth(){
    return this._dateOfBirth;
  }
  set dateOfBirth(value){
    if(value instanceof Date && value < Date.now()){
      this._dateOfBirth = value;
    }else{
      throw new TypeError('Birthday needs to be a valid date in the past');
    }
  }
}

// test the Person class
const newPerson = new Person('Arief','Kurniawan',new Date(2001, 11, 04));
// console.log(newPerson.dateOfBirth);


// this change is allowed : setter
// newPerson.dateOfBirth = new Date(2010,10,10);
// this change cause an error
// newPerson.dateOfBirth = new Date(2040,10,10);
// console.log(newPerson.dateOfBirth);


// other pattern
class Person2 {
  constructor(firstName, lastName, date){
    this.firstName = firstName;
    this.lastName = lastName;
    this.setDateOfBirth(date);
  }

  getDateOfBirth(){
    return this._dateOfBirth;
  }

  setDateOfBirth(value){
    if(value instanceof Date && value < Date.now()){
      this._dateOfBirth = value;
    }else{
      throw new TypeError('Birthdate cannot be in future');
    }
  }
}

const goodPeople = new Person2('Luke','Ichiba',new Date(1990,5,22));
// console.log(goodPeople.getDateOfBirth());
// this change is allowed too
// goodPeople.setDateOfBirth(new Date(2010,10,10));
// console.log(goodPeople.getDateOfBirth());




