// constructor with keyword new
// like function literals, Function() constructor creates anonymous function
// const f = new Function("x","y","return x*y");
//
// let scope = "global";
// function constructFunction(){
//   let scope = "local";
//   return new Function("return scope");
// }
//
//
// let result = constructFunction()();
// console.log(result);
function Person(name, age, job){
  this.name = name;
  this.age = age;
  this.job = job;
  this.sayName = function(){
    console.log(this.name);
  }
}
// function constructor need instance
let person1 = new Person("Arief",20,"Web Developer & Web Designer");
let person2 = new Person("Kurniawan", 27, "Doctor");
console.log(person1.job);
