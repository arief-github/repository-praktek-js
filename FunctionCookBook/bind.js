// let name = 'window';
// const newObject = {
//   name:'object',
//   sayGreeting(){
//     console.log(`Now this is easy, ${this.name}`);
//     const nestedGreeting = function(greeting){
//       console.log(`${greeting} ${this.name}`);
//     }.bind(this);
//     nestedGreeting("Hello")
//   }
// }
// newObject.sayGreeting();


function Counter(from, to){
    this.currentCount = from;
    this.finishCount = to;
    this.incrementCounter = function(){
      this.currentCount -= 1;
      if(this.currentCount > this.finishCount){
        setTimeout(this.incrementCounter.bind(this), 1000);
      }
    };
    this.startCounter = function(){
      this.incrementCounter();
    }
  }

  const counter = new Counter(10,0);


let result =  counter.startCounter();
