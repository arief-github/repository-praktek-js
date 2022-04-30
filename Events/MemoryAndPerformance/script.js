// Event Delegation is solution to the "too many handlers"

let item1 = document.getElementById('goSomewhere');
let item2 = document.getElementById('doSomething');
let item3 = document.getElementById('sayHi');


// jika diulangi menuliskan event seperti ini, maka akan sangat melelahkan
// item1.addEventListener("click", (event) => {
//   location.href = "http://www.wrox.com";
// })
//
// item2.addEventListener("click", (event) => {
//   document.title = "I change the document's title";
// })
//
// item3.addEventListener("click",(event) => {
//   console.log("hi");
// })

// this is why Event Delegation comes to play
let list = document.getElementById('myLinks');

list.addEventListener("click", (event) => {
  let target = event.target;

  switch (target.id) {
    case "doSomething":
      document.title = "I changed the document title";
      break;
    case "goSomewhere":
      location.href = "http://www.wrox.com";
      break;
    case "sayHi":
      console.log("Hi!");
      break;
  }
})

// Removing Event handlers
let btn = document.getElementById("myBtn");
btn.onclick = function() {
  // its become problem because not removing event handler
  // document.getElementById('myDiv').innerHTML = "Processing...";

  // best practice is set btn to null
  btn.onclick = null;
  document.getElementById('myDiv').innerHTML = "Processing...";

}
