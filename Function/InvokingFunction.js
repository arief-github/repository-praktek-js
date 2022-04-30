// invoke as function
function sum(a,b){
  return a+b;
}

// console.log(sum(10,10));


// invoke as methods


// let calculator = {
//   operand1: 1,
//   operand2: 1,
//   add(){
//     this.result = this.operand1 + this.operand2;
//   }
// }

// let call = calculator.result;
// console.log(call);

let o = {
  m: function(){
    let self = this;
    this === o;
    f();

    function f(){
      this === o;
      self === o;
    }
  }
};
// console.log(o.m);


// console.log(surename.fullname());




// invoke as constructors
// function Name(){
// return 'gotchaa';
// }

function Person(name, age, job){
  this.name = name;
  this.age = age;
  this.job = job;
  this.sayName= function(){
    console.log(this.name+" "+this.age+" "+this.job);
  }
}
let person1 = new Person("Arief", 20, "Javascript Developer");

console.log(person1.sayName());
// let printaName = new Name();
// console.log(printaName);
