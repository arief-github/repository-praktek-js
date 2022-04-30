// mechanism of this
// provide a more elegant way of implicitly "passing along" an object reference
// function identify(context) {
//   return context.name.toUpperCase();
// }
//
// function speak(context) {
//   var greeting = "Hello im" + identify(context);
//   console.log(greeting);
// }

function identify(){
  return this.name.toUpperCase();
}

function speak() {
  var greeting = "Hello i'm" + identify.call(me);
  console.log(greeting);
}

var me = {
  name: "Kyle"
}

var you = {
  name: "Reader"
}
// the first argument to both call() and apply() is the object on which the function is to be invoked
// and becomes the value of this
// identify.call(me);
// identify.call(you);

// speak.call(me);
// speak.call(you);

// speak(me);


function foo(num) {
  console.log("foo: " + num);
  this.count++;
}

// var data = {
//   count: 0
// }

foo.count = 0;
var i;
for(i = 0; i < 10; i++) {
  if(i > 5) {
    foo.call(foo,i); // second args are the values that are passed to the function
  }
}

console.log(foo.count);
