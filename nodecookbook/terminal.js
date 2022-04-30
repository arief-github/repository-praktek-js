// you want to get input from the application user via the terminal

// use node readline module

const readline = require('readline');


// getting user input
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });
//
// rl.question(">> whats your name ? ", answer => {
//   console.log(`Hello ${answer}`);
//   rl.close();
// })


// access number stdin until the user types in exit
let sum = 0;

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

console.log("Enter numbers, one to a line. Enter 'exit' to quit. ");

rl.setPrompt('>> ');
rl.prompt();

rl.on('line', input => {
  const userInput = input.trim();
  if(userInput === "exit") {
    rl.close();
    return;
  }
  sum += Number(userInput);
  rl.prompt;
})


// user typed in 'exit'
rl.on('close', () => {
  console.log(`Total is ${sum}`);
  process.exit(0);
})
