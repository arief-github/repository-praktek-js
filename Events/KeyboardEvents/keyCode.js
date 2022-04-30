// get char code
var EventUtil = {
  getCharCode: function(event) {
    if (typeof event.charCode == "number") {
      return event.charCode;
    } else {
      return event.keyCode;
    }
  }
}


// window.addEventListener("keyup", (event) => {
//   console.log(event.keyCode);
// })

// window.addEventListener("keypress", (event) => {
// console.log(EventUtil.getCharCode(event));
// })

// DOM level 3 changes
// When a character
// key is pressed, the value of key is equal to the text character
/*
For character keys, keyIdentifier returns the character code as a string in
the format “U+0000” to indicate the Unicode value.
*/
// window.addEventListener("keypress", (event) => {
//   let identifier = event.key || event.keyIdentifier;
//   if (identifier) {
//     console.log(identifier);
//   }
// })

// event location
// window.addEventListener("keypress", (event) => {
//   let loc = event.location || event.keyLocation;
//   if (loc) {
//     console.log(loc);
//   }
// })


// return true jika di klik shift + tombol lain
// return false jika tidak menekan shift
// getModifierState
// window.addEventListener("keypress", (event) => {
//   if (event.getModifierState) {
//     console.log(event.getModifierState("Shift"));
//   }
// });

// textInput Event
//  textInput dijalankan ketika kita menginputkan sesuatu
// let textbox = document.getElementById("myText");
// textbox.addEventListener("textInput", (event) => {
//   console.log(event.data);
// })


// Composition Event
// let textbox = document.getElementById("myText");
// textbox.addEventListener("compositionstart", (event) => {
//   console.log(event.data);
// });
// textbox.addEventListener("compositionupdate", (event) => {
//   console.log(event.data);
// });
// textbox.addEventListener("compositionend", (event) => {
//   console.log(event.data);
// });
