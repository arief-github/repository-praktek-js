// creating Objects

let book = {
  mainTitle: "javascript",
  subTitle: "the Definitive Guide",
  for: "all audience",
  author: {
    firstName: "Arief",
    lastName: "Kurniawan",
    age: 32
  }
}

// Querying and Setting
// accessing
// with dot
// console.log(book.author);
// with array assoc
// console.log(book["author"]);

// Setting/Add
// book.edition = 7;
// book["js-edition"] = "ES-6";


// Creating objects with keyword new

// let carType = new Object();
// carType.year = 1990;
// carType.brand = "Toyota";
// carType.isCluctch = true;
// carType.isMatic = false;
// carType.builtInfo = "Toyota Motor";

// console.log(carType);

// Object Create
// let objCreate1 = Object.create({x:1, y:2});


// accessor getter and setter
let accessors = {
  x: 1.0,
  y: 1.0,
  get acc() {
    // read property
    return Math.hypot(this.x, this.y)
  },
  set acc(newValue) {
    // write property
    let oldValue = Math.hypot(this.x, this.y);
    let ratio = newValue / oldValue;
    this.x *= ratio;
    this.y *= ratio;
  },
  get theta() {
    return Math.atan2(this.y, this.x);
  }
}

// accessors.acc = 10;
// console.log(accessors.acc);


// Copy object with spread operator
let position = {x:0, y:0};
let dimensions = {width:100, height: 75};
let rect = {...position, ...dimensions};

// console.log(rect);

// toJSON method
let convertToJSON = {
  x:1,
  y:2,
  toJSON: function(){
    return `(${this.x}, ${this.y})`;
  }
}

// console.log(JSON.stringify(convertToJSON));


// Object Cloning and Depth Cloning
const fox = {
  name: 'red fox',
  class: 'Mammalia',
  order: 'Carnivorra',
  family: 'canidae',
  genus: 'vulpes',
  species: 'Vulpes vulpes'
}

const animalCopy = fox;
console.log(animalCopy);
