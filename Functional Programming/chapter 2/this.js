// javascript functions have a this keyword thats automatically bound per function call
function sum() {
  return this.x + this.y // if youre not set this, js is asking, which x and y
}

// var context = {
//   x: 1,
//   y: 2
// }

// binding with call
// console.log(sum.call(context));

// context.sum = sum;
// context.sum();

// binding with bind
var s = sum.bind(context);
// console.log(s());


// this can be input into a function implicitly
var context = {
  x: 1,
  y: 2
}
function add(ctx) {
  return ctx.x + ctx.y;
}
// console.log(add(context));

// var Auth = {
//   authorize() {
//     var credentials = `${this.username}: ${this.password}`;
//     this.send(credentials, resp => {
//       if(resp.error) this.displayError(resp.error);
//       else this.displaySuccess();
//     })
//   }
// }
//
//
// var Login = Object.assign(Object.create(Auth), {
//   doLogin(user, pw) {
//     this.username = user;
//     this.password = pw;
//     this.authorize();
//   },
//   displayError(err) {
//
//   },
//   displaySuccess() {
//
//   }
// })
//
// console.log(Login.doLogin("fred", "123"));



// lets try to illustrate the motivation and utility of this
// this is implicitly passing context
// function identify() {
//   return this.name.toUpperCase();
// }
//
// function speak() {
//   var greeting = "Hello, I'm " + identify.call(this);
//   console.log(greeting);
// }
//
// var me =  {
//   name : "Kyle"
// }
//
// var you = {
//   name : "Reader"
// }

// console.log(identify.call(me));
// console.log(identify.call(you));

// console.log(speak.call(me));
// console.log(speak.call(you));

// explicitly passed in a context object

function identify(context) {
  return context.name.toUpperCase();
}

function speak(context) {
  var greeting = "Hello I'm " + identify(context);
  console.log(greeting);
}
var me =  {
  name : "Kyle"
}

var you = {
  name : "Reader"
}

// console.log(identify(me));
// console.log(speak(me));


// function foo(num) {
//   console.log("foo : " + num);
//   foo.count = 0;
//   this.count++;
// }
//
//
// var i;
//
// for (i = 0; i < 10; i++) {
//   if(i > 5) {
//     foo(i);
//   }
// }
//
// console.log(foo.count);

// function foo(num) {
//   console.log("foo:" + num);
//
//   this.count++;
// }
//
// foo.count = 0;
//
// for(let i = 0; i < 10; i++) {
//   if( i > 5 ) {
//     foo.call(foo, i);
//   }
// }
//
// console.log(foo.count);
