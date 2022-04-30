const student = {
  firstName: 'Tazle',
  lastName: 'Yang',
  testScores: [78, 88 , 94, 91, 88, 96]
}

// create function scope
function cloneStudent(student){
  // start with a shallow copy
  const studentCopy = {...student};
  // now duplicate the array by expanding it with spread
  studentCopy.testScores = [...studentCopy.testScores];
  return studentCopy;
}

const studentCopy = cloneStudent(student);

studentCopy.testScores[0] = 56;

// console.log([student.testScores[0], studentCopy.testScores[0]]);


// using class to make independent cloning Object
class Student{
  constructor(firstName, lastName, testScores){
    this.firstName = firstName;
    this.lastName = lastName;
    this.testScores = testScores;
  }
  clone(){
    return new Student(this.firstName, this.lastName, [...this.testScores]);
  }
}

const student1 = new Student('Tazle', 'Yang', [78,88,94,91,88,96]);
const studCopy = student1.clone();
studCopy.testScores[0] = 56;
console.log([student1.testScores[0], studCopy.testScores[0]]);
