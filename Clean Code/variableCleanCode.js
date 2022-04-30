// this practical from medium article, base from Clean Code book
// 1. Variable : using meaningful names
// name must be descriptive

// Dont
const foo = "aip.kuniaw@gmail.com";
const bar = "John";
// const age = 23;
const qux = true;

// Do
const email = "aip.kuniaw@gmail.com";
const firstName = "John"; // use first,last,sure for name
const age = 23;
const isActive = true; // use 'is' when boolean , answer specific question


// 1.2.  avoiding unecessary contexts
// do not add redundant context to variable names when the context is already provided by the
// containing object or class


// Dont
// const user = {
//   userId : "12",
//   userEmail: "aip.kuniaw@gmail.com",
//   userFirstName: "John",
//   userLastName: "Doe",
//   userAge: 23,
// }

// redundant name user
// user.userId;

// Do
const user = {
  id : "12",
  email: "aip.kuniaw@gmail.com",
  firstName: "John",
  lastName: "Doe",
  age: 23,
}

// user.id;


// 1.3. avoiding hardcoded values
// Dont : 9000 is hardcoded
setTimeout(clearSessionData, 9000);

// Do : SCREAMING_SNAKE_CASE
const SESSION_DURATION_MS = 15*60*1000;
setTimeout(clearSessionData, SESSION_DURATION_MS);
