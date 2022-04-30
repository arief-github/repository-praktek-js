// basic structure closure
function outerFunction(){
  function innerFunction(){

  }
  return innerFunction;
}


// complete example
function greetingMaker(greeting){
  function addName(name){
    return `${greeting} ${name}`;
  }
  return addName;
}
const daytimeGreeting = greetingMaker('Good Day to you');
const nightGreeting = greetingMaker('Good Evening');
// console.log(daytimeGreeting('name'));


function createCounter(){
  let count = 0;
  function counter(){
    count += 1;
    console.log(count);
  }
  return counter;
}

const counterFunction = createCounter();
