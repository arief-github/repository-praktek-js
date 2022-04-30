// call stack javascript
// function baz() {
//   console.log("baz");
//   bar();
// }
//
//
// function bar() {
//   console.log("bar");
//   foo();
// }
//
// function foo() {
//   console.log("foo");
// }

// baz();


// Default binding

// function foo() {
//   console.log(this.a);
// }
//
// var a = 2;

// foo();

// implicit binding
// function foo() {
//   console.log(this.a);
// }
//
// var obj = {
//   a:2,
//   foo: foo
// }
//
// var obj2 = {
//   a: 42,
//   foo: foo
// }
//
// var obj1 = {
//   a:2,
//   foo:foo
// }
// obj1.obj2.foo();



// implicitly lost
function foo() {
  console.log(this.a);
}

var obj = {
  a: 2,
  foo: foo
}

var bar = obj.foo;
var aps = "oops, global";
bar();
